import React, {useMemo} from 'react'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'
import {StructuredListRow, StructuredListCell} from 'carbon-components-react'

export const ProblemListItem = ({author, createdAt, description, link}) => {
  const timeAgo = useMemo(() => format(createdAt), [createdAt])

  return (
    <StructuredListRow>
      <StructuredListCell>{author}</StructuredListCell>
      <StructuredListCell>{timeAgo}</StructuredListCell>
      <StructuredListCell noWrap>
        <Link to={link}>{description}</Link>
      </StructuredListCell>
    </StructuredListRow>
  )
}
