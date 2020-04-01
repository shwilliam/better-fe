import React, {useCallback} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {PROBLEM} from '../context'
import {Button} from 'carbon-components-react'
import {NewSolutionForm} from './'

export const ProblemSolve = () => {
  const history = useHistory()
  const {id} = useParams()
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(PROBLEM, {variables: {id}})
  const navigateToProblem = useCallback(() => {
    history.push(`/problems/${id}`)
  }, [history, id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const {description, boilerplate} = data.problem

  return (
    <>
      <header className="page__header">
        <h2>Problem: {description}</h2>
        <Button kind="tertiary" onClick={navigateToProblem}>
          Back
        </Button>
      </header>

      <NewSolutionForm boilerplate={boilerplate} />
    </>
  )
}
