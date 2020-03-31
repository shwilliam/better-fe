import React from 'react'
import {Link} from 'react-router-dom'
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
      {data.problems.map(({id, description}) => (
        <li key={id}>
          <Link to={`/problems/${id}`}>{description}</Link>
        </li>
      ))}
    </ol>
  )
}
