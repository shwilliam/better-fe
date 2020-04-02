import React, {useCallback} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {Button, Breadcrumb, BreadcrumbItem} from 'carbon-components-react'
import {PROBLEM} from '../context'
import {SolutionList, Editor, Preview} from './'

export const Problem = () => {
  const history = useHistory()
  const {id} = useParams()
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(PROBLEM, {variables: {id}})
  const navigateToNewSolution = useCallback(() => {
    history.push(`/problems/${id}/solve`)
  }, [history, id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const {description, solutions, createdAt, boilerplate} = data.problem
  const {html, js, css} = boilerplate

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/problems">All problems</Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <h2>{description}</h2>
      <Button className="title__action" onClick={navigateToNewSolution}>
        Submit a solution
      </Button>

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
