import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import PeopleList from "../src/client/components/people/list"
import {Router, Switch, Route} from "react-router-dom"
import {createBrowserHistory} from "history"

let customHistory = null
let Wrapper = null

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
  customHistory = createBrowserHistory()
  Wrapper = ({children}) => (
    <Router history={customHistory}><Switch><Route>{children}</Route></Switch></Router>
  )
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders text when no data is provided", () => {
  act(() => {
    render(<PeopleList data={[]} />, container)
  })
  expect(container.textContent).toBe("No people to display")
})

it("renders table with rows of people", () => {
  act(() => {
    render(<Wrapper><PeopleList data={[{id: "1", name: "test", age: 44}]} /></Wrapper>, container)
  })
  expect(container.querySelectorAll("tbody tr")).toHaveLength(1)
  expect(container.querySelectorAll("tbody tr td")).toHaveLength(2)

  act(() => {
    render(<Wrapper><PeopleList data={[{id: "1", name: "test", age: 44}, {id: "2", name: "test 2", age: 55}]} /></Wrapper>, container)
  })
  expect(container.querySelectorAll("tbody tr")).toHaveLength(2)
})
