import React from 'react'
import { AnecdoteListContainer } from '../../components/AnecdoteList'
import { render /*, fireEvent*/ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const mockery = [
  {
    'content': 'TESTI A',
    'id': '47145',
    'votes': 1
  },
  {
    'content': 'TESTI B',
    'id': '21149',
    'votes': 2
  },
]

describe('AnecdoteList', () => {
  it('list values are ok and properly ordered', () => {
    const onSubmit = jest.fn()
    const component = render(<AnecdoteListContainer anecdotes={mockery} vote={onSubmit} />)

    const testiA = component.getByText('TESTI A').parentElement
    const testiB = component.getByText('TESTI B').parentElement

    expect(testiA).toHaveTextContent('1')
    expect(testiB).toHaveTextContent('2')

    const childNodes = component.container.firstChild.childNodes
    expect(childNodes[0].textContent).toContain('TESTI B')
    expect(childNodes[1].textContent).toContain('TESTI A')
  })
})