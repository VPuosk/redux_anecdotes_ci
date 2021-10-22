import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

export const AnecdoteFormContainer = ({ newAnecdote }) => {
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <input id="anecdoteField" name='anecdote'/>
        <button id="anecdoteSubmit" type='submit'>create</button>
      </form>
    </div>
  )
}

const AnecdoteForm = (props) => {
  const newAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
  }

  return (
    <AnecdoteFormContainer newAnecdote={newAnecdote} />
  )
/*
  const newAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <input id="anecdoteField" name='anecdote'/>
        <button id="anecdoteSubmit" type='submit'>create</button>
      </form>
    </div>
  )
  */
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAnecdote: (value) => {
      dispatch(createAnecdote(value))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)