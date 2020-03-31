import React from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {PROBLEM} from '../context'
import {Solution} from './'

export const Problem = () => {
  const {id} = useParams()
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(PROBLEM, {variables: {id}})

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <p>{data.problem.description}</p>

      <p>Solved by:</p>
      <ul>
        {data.problem.solutions.map(({id, author, up_votes, down_votes}) => (
          <Solution
            key={id}
            id={id}
            author={author}
            upVotes={up_votes}
            downVotes={down_votes}
          />
        ))}
      </ul>
    </>
  )
}
