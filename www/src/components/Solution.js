import React, {useCallback} from 'react'
import {useMutation} from '@apollo/react-hooks'
import {UPVOTE_SOLUTION, DOWNVOTE_SOLUTION} from '../context'

export const Solution = ({id, author, upVotes, downVotes}) => {
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
    <li>
      <p>{author}</p>
      <button onClick={upvote}>up vote ({upVotes})</button>
      <button onClick={downvote}>down vote ({downVotes})</button>
    </li>
  )
}
