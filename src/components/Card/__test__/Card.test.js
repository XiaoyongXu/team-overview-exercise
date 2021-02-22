import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../Card'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Card />, div)
})

it("renders Card correctly with title", () => {
  const { getByTestId } = render(<Card title="test title" />)
  expect(getByTestId('card')).toHaveTextContent("test title")
})

it("renders Card correctly with subtitle", () => {
  const { getByTestId } = render(<Card subTitle="test subTitle" />)
  expect(getByTestId('card')).toHaveTextContent("test subTitle")
})

it("matches snapshot 1", () => {
  const tree = renderer.create(<Card title="test title" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot 2", () => {
  const tree = renderer.create(<Card title="test subtitle" />).toJSON()
  expect(tree).toMatchSnapshot()
})