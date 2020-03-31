import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {ALL_PROBLEMS} from '../context'

export const ProblemList = () => {
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(ALL_PROBLEMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data.problems?.length) return <p>No problems...</p>

  return (
    <ol>
      {data.problems.map(({id, description, solutions}) => (
        <li key={id}>
          <p>{description}</p>

          <p>Solved by:</p>
          <ul>
            {solutions.map(({id, author}) => (
              <li key={id}>{author}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
