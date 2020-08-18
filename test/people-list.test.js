import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import PeopleList from '../src/client/components/people/list'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Wrapper = ({children}) => (
  <Router><Switch><Route>{children}</Route></Switch></Router>
)
describe('people-list', function() {
  beforeEach(() => {
    // setup a DOM element as a render target
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
  })

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(this.container)
    this.container.remove()
    this.container = null
  })

  it('renders text when no data is provided', () => {
    act(() => {
      render(<PeopleList data={[]} />, this.container)
    })
    expect(this.container.textContent).to.equal('No people to display')
  })

  it('renders table with rows of people', () => {
    act(() => {
      render(<Wrapper><PeopleList data={[{id: '1', name: 'test', age: 44}]} /></Wrapper>, this.container)
    })
    expect(this.container.querySelectorAll('tbody tr')).to.have.lengthOf(1)
    expect(this.container.querySelectorAll('tbody tr td')).to.have.lengthOf(5)

    act(() => {
      render(<Wrapper><PeopleList data={[{id: '1', name: 'test', age: 44}, {id: '2', name: 'test 2', age: 55}]} /></Wrapper>, this.container)
    })
    expect(this.container.querySelectorAll('tbody tr')).to.have.lengthOf(2)
  })
})
