import React, {useCallback} from 'react'
import {TableRow} from 'carbon-components-react'
import {useHistory} from 'react-router-dom'

export const ProblemListItem = ({link, children, ...props}) => {
  const history = useHistory()
  const navigateToProblem = useCallback(() => {
    history.push(link)
  }, [history, link])

  return (
    <TableRow onClick={navigateToProblem} className="clickable" {...props}>
      {children}
    </TableRow>
  )
}
