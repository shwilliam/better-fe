import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListBody,
  StructuredListCell,
} from 'carbon-components-react'
import {ALL_PROBLEMS} from '../context'
import {ProblemListItem} from './'

export const ProblemList = () => {
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(ALL_PROBLEMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data.problems?.length) return <p>No problems...</p>

  return (
    <>
      <h2>Problems</h2>

      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            <StructuredListCell head>Author</StructuredListCell>
            <StructuredListCell head>Published</StructuredListCell>
            <StructuredListCell head>Description</StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          {data.problems.map(({id, description, author, createdAt}) => (
            <ProblemListItem
              key={id}
              link={`/problems/${id}`}
              createdAt={createdAt}
              author={author}
              description={description}
            />
          ))}
        </StructuredListBody>
      </StructuredListWrapper>
    </>
  )
}
