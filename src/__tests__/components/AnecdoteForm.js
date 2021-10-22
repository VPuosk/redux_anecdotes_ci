import React from 'react'
import { AnecdoteFormContainer } from '../../components/AnecdoteForm'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('AnecdoteForm', () => {
  it('input value is ok, and return function is called', () => {
    const onSubmit = jest.fn()
    const textContent = 'uusi dootti'
    const component = render(<AnecdoteFormContainer newAnecdote={onSubmit} />)

    const input = component.container.querySelector('#anecdoteField')
    const button = component.container.querySelector('#anecdoteSubmit')

    fireEvent.change(input, {
      target: { value: textContent }
    })
    fireEvent.submit(button)

    expect(onSubmit.mock.calls).toHaveLength(1)
    expect(input.value).toBe(textContent)
  })
})