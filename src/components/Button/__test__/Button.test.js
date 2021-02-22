import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly with label", () => {
  const { getByTestId } = render(<Button label="click test" ></Button>)
  expect(getByTestId('button')).toHaveTextContent("click test")
})

it("renders button correctly with disabled", () => {
  const { getByTestId } = render(<Button disabled ></Button>)
  expect(getByTestId('button')).toHaveAttribute("disabled")
})

it("renders button correctly with children", () => {
  const { getByTestId } = render(<Button><div>Back</div></Button>)
  expect(getByTestId('button')).toHaveTextContent("Back")
})

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="Back" ></Button>).toJSON()
  expect(tree).toMatchSnapshot()
})