import React from 'react'
import {Link} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {ALL_PROBLEMS} from '../context'
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListBody,
  StructuredListCell,
} from 'carbon-components-react'

export const ProblemList = () => {
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(ALL_PROBLEMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data.problems?.length) return <p>No problems...</p>

  return (
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>Author</StructuredListCell>
          <StructuredListCell head>Published</StructuredListCell>
          <StructuredListCell head>Description</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        {data.problems.map(({id, createdAt, description, author}) => (
          <StructuredListRow key={id}>
            <StructuredListCell>{author}</StructuredListCell>
            <StructuredListCell>{createdAt}</StructuredListCell>
            <StructuredListCell noWrap>
              <Link to={`/problems/${id}`}>{description}</Link>
            </StructuredListCell>
          </StructuredListRow>
        ))}
      </StructuredListBody>
    </StructuredListWrapper>
  )
}
