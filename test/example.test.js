import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'

describe('Example React', function() {
  // beforeEach and afterEach need to setup DOM and clean it up between each `act()` so the rendered content can be tested
  beforeEach(() => {
    this.Hello = (props) => {
      if (props.name) {
        return <h1>Hello, {props.name}!</h1>
      } else {
        return <span>Hey, stranger</span>
      }
    }

    this.container = null
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
  })

  afterEach(() => {
    unmountComponentAtNode(this.container)
    this.container.remove()
    this.container = null
  })

  // Two different styles. This one lets you use describe & before blocks to setup results. Its only assert.
  describe('renders with or without a name', () => {
    beforeEach(() => {
      act(() => { render(<this.Hello />, this.container) })
    })
    it('should render without the name', () => expect(this.container.textContent).to.equal('Hey, stranger'))
  })

  describe('renders with a name', () => {
    beforeEach(() => {
      act(() => { render(<this.Hello name="test"/>, this.container) })
    })
    it('should render with name', () => expect(this.container.textContent).to.equal('Hello, test!'))
  })

  // Here we grouped one describe blog and let the It's act/render the tests and assert them independently.
  describe('Grouped', () => {
    it('should render without name', () => {
      act(() => { render(<this.Hello/>, this.container) })
      expect(this.container.textContent).to.equal('Hey, stranger')
    })

    it('should render with a name', () => {
      act(() => { render(<this.Hello name="test"/>, this.container) })
      expect(this.container.textContent).to.equal('Hello, test!')
    })
  })
})
