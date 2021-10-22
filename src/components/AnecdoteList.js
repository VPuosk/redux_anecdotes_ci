import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'

export const AnecdoteListContainer = ({ anecdotes, vote }) => {
  return (
    <div>
      {anecdotes
        .sort((a,b) => {
          return b.votes - a.votes
        })
        .map(anecdote =>
          <div id={anecdote.id} key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
            has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }
    return state
      .anecdotes
      .filter(anec => anec.content
        .toUpperCase()
        .includes(state.filter
          .toUpperCase()
        )
      )
  })

  const vote = (id) => {
    const anecdote = anecdotes.filter(anec => anec.id === id)[0]
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 2))
  }

  return (
    <div>
      <AnecdoteListContainer anecdotes={anecdotes} vote={vote} />
    </div>
  )
}

export default AnecdoteList