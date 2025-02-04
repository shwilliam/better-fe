import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {Button, Breadcrumb, BreadcrumbItem} from 'carbon-components-react'
import {PROBLEM} from '../context'
import {useNavigation} from '../hooks'
import {SolutionList, Editor, Preview, Tag} from './'

export const Problem = () => {
  const {id} = useParams()
  const {navigateToNewSolution} = useNavigation(id)
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(PROBLEM, {variables: {id}})

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const {description, solutions, createdAt, boilerplate, tags} = data.problem
  const {html, js, css} = boilerplate

  return (
    <article>
      <header>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/problems">All problems</Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="page__header">
          <div className="page__header-title">
            <h2>{description}</h2>
            <div>
              {tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          <Button onClick={navigateToNewSolution}>Submit a solution</Button>
        </div>
      </header>

      <section className="editor">
        <Preview html={html} js={js} css={css} />
        <Editor html={html} js={js} css={css} readOnly />
      </section>

      {solutions?.length > 0 && (
        <SolutionList data={solutions} createdAt={createdAt} />
      )}
    </article>
  )
}
