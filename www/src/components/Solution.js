import React, {useCallback, useState} from 'react'
import {useMutation} from '@apollo/react-hooks'
import {UPVOTE_SOLUTION, DOWNVOTE_SOLUTION} from '../context'
import {
  Button,
  TableCell,
  TableExpandRow,
  TableExpandedRow,
} from 'carbon-components-react'
import {Preview, Editor} from './'

export const Solution = ({id, author, upVotes, downVotes, createdAt, code}) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setOpen(s => !s)
  }, [])
  const [upvoteSolution] = useMutation(UPVOTE_SOLUTION, {
    refetchQueries: ['problem'],
  })
  const [downvoteSolution] = useMutation(DOWNVOTE_SOLUTION, {
    refetchQueries: ['problem'],
  })
  const upvote = useCallback(() => {
    upvoteSolution({
      variables: {
        id,
        up_votes: upVotes + 1, // FIXME
      },
    })
  }, [id, upvoteSolution, upVotes])
  const downvote = useCallback(() => {
    downvoteSolution({
      variables: {
        id,
        down_votes: downVotes + 1, // FIXME
      },
    })
  }, [id, downvoteSolution, downVotes])

  return (
    <>
      <TableExpandRow onExpand={toggleOpen} isExpanded={open}>
        <TableCell>{author}</TableCell>
        <TableCell>{createdAt}</TableCell>
        <TableCell>{upVotes}</TableCell>
        <TableCell>{downVotes}</TableCell>
      </TableExpandRow>
      <TableExpandedRow colSpan="5">
        <section className="editor">
          <Preview js={code.js} html={code.html} css={code.css} />
          <Editor js={code.js} html={code.html} css={code.css} readOnly />
        </section>

        <div className="submit__actions">
          <Button kind="danger" onClick={downvote}>
            Dislike
          </Button>
          <Button onClick={upvote}>Like</Button>
        </div>
      </TableExpandedRow>
    </>
  )
}
