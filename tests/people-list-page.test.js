import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import PeoplePage from "../src/client/components/start-context/list-page"
import {Router, Switch, Route} from "react-router-dom"
import {createBrowserHistory} from "history"
import AppProvider from "../src/client/components/start-context/app-provider"

let customHistory = null
let Wrapper = null

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
  customHistory = createBrowserHistory()
  Wrapper = ({children}) => (
    <AppProvider><Router history={customHistory}><Switch><Route>{children}</Route></Switch></Router></AppProvider>
  )
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders the people page with data", async () => {
  jest.mock("../src/client/lib/fetch-json", (url, options) => {
    const fakePeople = [{
      name: "Joni Baez",
      age: 32,
      id: "1"
    }]
    Promise.resolve({
      json: () => Promise.resolve(fakePeople)
    })
  })
  await act(async () => {
    render(<Wrapper><PeoplePage /></Wrapper>, container)
  })
  expect(container.textContent).toContain("No people to display")

  jest.resetModules()
})
