import React from 'react'
import ReactDOM from 'react-dom'
import Search from '../Search'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Search />, div)
})

it("renders Search correctly with placeholder", () => {
  const { getByTestId } = render(<Search placeholder="please search" />)
  expect(getByTestId('Search')).toHaveAttribute("placeholder")
})

it("renders Search correctly with style", () => {
  const { getByTestId } = render(<Search style={{}} />)
  expect(getByTestId('Search')).toHaveAttribute("style")
})


it("matches snapshot 1", () => {
  const tree = renderer.create(<Search placeholder="please search" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot 2", () => {
  const tree = renderer.create(<Search style={{}} />).toJSON()
  expect(tree).toMatchSnapshot()
})