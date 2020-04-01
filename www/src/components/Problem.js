import React, {useState, useMemo} from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {PROBLEM} from '../context'
import {Solution, NewSolutionForm, Preview} from './'

export const Problem = () => {
  const {id} = useParams()
  const [activeSolution, setActiveSolution] = useState()
  // TODO: abstract queries/mutation to custom hooks
  const {loading, error, data} = useQuery(PROBLEM, {variables: {id}})
  const activeSolutionCode = useMemo(() => {
    if (activeSolution && data?.problem?.solutions) {
      return data?.problem?.solutions?.find(({id}) => id === activeSolution)
        .code
    } else {
      return null
    }
  }, [activeSolution, data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const {description, boilerplate, solutions} = data.problem

  return (
    <>
      <h2>Problem: {description}</h2>

      {solutions?.length > 0 && (
        <>
          <p>Solved by:</p>
          <ul>
            {solutions.map(({id, author, up_votes, down_votes}) => (
              <Solution
                key={id}
                id={id}
                author={author}
                upVotes={up_votes}
                downVotes={down_votes}
                onSelect={setActiveSolution}
              />
            ))}
          </ul>
        </>
      )}

      {activeSolution ? (
        <>
          <Preview
            js={activeSolutionCode.js}
            html={activeSolutionCode.html}
            css={activeSolutionCode.css}
          />
          <p>{activeSolutionCode.html}</p>
          <p>{activeSolutionCode.js}</p>
          <p>{activeSolutionCode.css}</p>
        </>
      ) : (
        <NewSolutionForm boilerplate={boilerplate} />
      )}
    </>
  )
}
