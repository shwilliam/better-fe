import React, {useCallback, useState, useMemo} from 'react'
import {useMutation} from '@apollo/react-hooks'
import {format} from 'timeago.js'
import {
  Button,
  TableCell,
  TableExpandRow,
  TableExpandedRow,
} from 'carbon-components-react'
import {UPVOTE_SOLUTION, DOWNVOTE_SOLUTION} from '../context'
import {Preview, Editor} from './'
import {useLocalLikes} from '../hooks'

export const SolutionListItem = ({
  id,
  author,
  upVotes,
  downVotes,
  createdAt,
  code,
}) => {
  const [likes, addLike] = useLocalLikes()
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
    }).then(() => addLike(id))
  }, [id, upvoteSolution, upVotes, addLike])
  const downvote = useCallback(() => {
    addLike(id)
    downvoteSolution({
      variables: {
        id,
        down_votes: downVotes + 1, // FIXME
      },
    }).then(() => addLike(id))
  }, [id, downvoteSolution, downVotes, addLike])
  const timeAgo = useMemo(() => format(createdAt), [createdAt])
  const isLiked = useMemo(() => likes.includes(id), [likes, id])

  return (
    <>
      <TableExpandRow
        onExpand={toggleOpen}
        isExpanded={open}
        ariaLabel="Solution details"
      >
        <TableCell>{author}</TableCell>
        <TableCell>{timeAgo}</TableCell>
        <TableCell>{upVotes}</TableCell>
        <TableCell>{downVotes}</TableCell>
      </TableExpandRow>
      <TableExpandedRow colSpan={5}>
        <section className="editor">
          <Preview id={id} js={code.js} html={code.html} css={code.css} />
          <Editor js={code.js} html={code.html} css={code.css} readOnly />
        </section>

        <div className="submit__actions">
          <Button disabled={isLiked} kind="danger" onClick={downvote}>
            Dislike
          </Button>
          <Button disabled={isLiked} onClick={upvote}>
            Like
          </Button>
        </div>
      </TableExpandedRow>
    </>
  )
}
