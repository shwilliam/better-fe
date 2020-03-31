import React, {useCallback} from 'react'
import {useQuery, useMutation} from '@apollo/react-hooks'
import {ALL_PROBLEMS, UPVOTE_SOLUTION, DOWNVOTE_SOLUTION} from '../context'

const Solution = ({id, author, upVotes, downVotes}) => {
  const [upvoteSolution] = useMutation(UPVOTE_SOLUTION, {
    refetchQueries: ['allProblems'],
  })
  const [downvoteSolution] = useMutation(DOWNVOTE_SOLUTION, {
    refetchQueries: ['allProblems'],
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

export const ProblemList = () => {
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(ALL_PROBLEMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data.problems?.length) return <p>No problems...</p>

  return (
    <ol>
      {data.problems.map(({id: problem_id, description, solutions}) => (
        <li key={problem_id}>
          <p>{description}</p>

          <p>Solved by:</p>
          <ul>
            {solutions.map(({id, author, up_votes, down_votes}) => (
              <Solution
                key={id}
                id={id}
                author={author}
                upVotes={up_votes}
                downVotes={down_votes}
              />
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
