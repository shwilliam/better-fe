import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableExpandHeader,
} from 'carbon-components-react'
import {Solution} from './'

export const SolutionList = ({data, createdAt}) => (
  <TableContainer title="Solutions" description={createdAt}>
    <Table>
      <TableHead>
        <TableRow>
          <TableExpandHeader />
          <TableHeader>Author</TableHeader>
          <TableHeader>Date</TableHeader>
          <TableHeader>Likes</TableHeader>
          <TableHeader>Dislikes</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({id, author, up_votes, down_votes, createdAt, code}) => (
          <Solution
            key={id}
            id={id}
            upVotes={up_votes}
            downVotes={down_votes}
            createdAt={createdAt}
            author={author || 'Anon'}
            code={code}
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
