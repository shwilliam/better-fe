import React from 'react'
import {TableRow} from 'carbon-components-react'
import {useNavigation} from '../hooks'

export const ProblemListItem = ({id, children, ...props}) => {
  const {navigateToProblem} = useNavigation(id)

  return (
    <TableRow onClick={navigateToProblem} className="clickable" {...props}>
      {children}
    </TableRow>
  )
}
