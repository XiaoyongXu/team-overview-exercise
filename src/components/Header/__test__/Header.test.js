import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Header />, div)
})

it("renders Header correctly with title", () => {
  const { getByTestId } = render(<Header title="test title" />)
  expect(getByTestId('header')).toHaveTextContent("test title")
})

it("renders Header correctly with back button", () => {
  const { getByTestId } = render(<Header backLabel="Back" />)
  expect(getByTestId('header')).toHaveTextContent("Back")
})


it("matches snapshot 1", () => {
  const tree = renderer.create(<Header title="test title" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot 2", () => {
  const tree = renderer.create(<Header backLabel="Back" />).toJSON()
  expect(tree).toMatchSnapshot()
})