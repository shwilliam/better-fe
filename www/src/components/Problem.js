import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {PROBLEM} from '../context'
import {SolutionList, Editor, Preview} from './'

export const Problem = () => {
  const {id} = useParams()
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(PROBLEM, {variables: {id}})

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const {description, solutions, createdAt, boilerplate} = data.problem
  const {html, js, css} = boilerplate

  return (
    <>
      <h2>Problem: {description}</h2>

      <Link to={`/problems/${id}/solve`}>Submit a solution</Link>

      <section className="editor">
        <Preview html={html} js={js} css={css} />
        <Editor html={html} js={js} css={css} readOnly />
      </section>

      {solutions?.length > 0 && (
        <SolutionList data={solutions} createdAt={createdAt} />
      )}
    </>
  )
}
