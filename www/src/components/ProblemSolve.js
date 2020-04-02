import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {PROBLEM} from '../context'
import {Breadcrumb, BreadcrumbItem} from 'carbon-components-react'
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
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/problems">All problems</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={`/problems/${id}`}>{description}</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <h2 className="title">Post your solution</h2>

      <NewSolutionForm boilerplate={boilerplate} />
    </>
  )
}
