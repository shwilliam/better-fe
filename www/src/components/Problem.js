import React, {useCallback} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {Button} from 'carbon-components-react'
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
      <header className="page__header">
        <h2>Problem: {description}</h2>

        <Button kind="tertiary" onClick={navigateToNewSolution}>
          Submit a solution
        </Button>
      </header>

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
