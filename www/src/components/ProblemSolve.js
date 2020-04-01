import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {PROBLEM} from '../context'
import {NewSolutionForm} from './'

export const ProblemSolve = () => {
  const {id} = useParams()
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(PROBLEM, {variables: {id}})

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const {description, boilerplate} = data.problem

  return (
    <>
      <h2>Problem: {description}</h2>
      <Link to={`/problems/${id}`}>Back</Link>
      <NewSolutionForm boilerplate={boilerplate} />
    </>
  )
}
