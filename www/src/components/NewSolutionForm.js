import React, {useCallback, useState} from 'react'
import {useMutation, useQuery} from '@apollo/react-hooks'
import {CREATE_SOLUTION, ALL_PROBLEMS} from '../context'

export const NewSolutionForm = () => {
  const [problem, setProblem] = useState()
  const [author, setAuthor] = useState('')
  const [html, setHTML] = useState('')
  const [js, setJS] = useState('')
  const [css, setCSS] = useState('')
  // TODO: handle errors
  const {loading: problemsLoading, data: problemsData} = useQuery(ALL_PROBLEMS)
  // TODO: loading indicator
  const [createSolution, {loading}] = useMutation(CREATE_SOLUTION, {
    refetchQueries: ['allProblems'],
  })

  const handleSumbit = useCallback(
    e => {
      e.preventDefault()

      createSolution({
        variables: {
          id: problem || problemsData?.problems[0].id, // FIXME: use default value on el
          author,
          html,
          js,
          css,
        },
      })
      setAuthor('')
      setHTML('')
      setJS('')
      setCSS('')
    },
    [createSolution, author, html, js, css, problem, problemsData],
  )

  const handleProblemChange = useCallback(e => setProblem(e.target.value), [])
  const handleAuthorChange = useCallback(e => setAuthor(e.target.value), [])
  const handleHTMLChange = useCallback(e => setHTML(e.target.value), [])
  const handleJSChange = useCallback(e => setJS(e.target.value), [])
  const handleCSSChange = useCallback(e => setCSS(e.target.value), [])

  if (problemsLoading || !problemsData.problems)
    return <p>Loading problems...</p>

  return (
    <form onSubmit={handleSumbit}>
      Submit a solution:
      <label>
        <select onChange={handleProblemChange}>
          {!loading &&
            problemsData &&
            problemsData.problems.map(({id, description}) => (
              <option key={id} value={id}>
                {description}
              </option>
            ))}
        </select>
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleAuthorChange}
        />
      </label>
      <label>
        HTML:
        <input
          type="text"
          name="HTML"
          value={html}
          onChange={handleHTMLChange}
        />
      </label>
      <label>
        JS:
        <input type="text" name="JS" value={js} onChange={handleJSChange} />
      </label>
      <label>
        CSS:
        <input type="text" name="CSS" value={css} onChange={handleCSSChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
