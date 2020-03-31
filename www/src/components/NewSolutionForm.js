import React, {useCallback, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_SOLUTION} from '../context'

export const NewSolutionForm = () => {
  const {id} = useParams()
  const [author, setAuthor] = useState('')
  const [html, setHTML] = useState('')
  const [js, setJS] = useState('')
  const [css, setCSS] = useState('')
  // TODO: handle errors
  // TODO: loading indicator
  const [createSolution] = useMutation(CREATE_SOLUTION, {
    refetchQueries: ['allProblems'],
  })

  const handleSumbit = useCallback(
    e => {
      e.preventDefault()

      createSolution({
        variables: {
          id,
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
    [createSolution, author, html, js, css, id],
  )

  const handleAuthorChange = useCallback(e => setAuthor(e.target.value), [])
  const handleHTMLChange = useCallback(e => setHTML(e.target.value), [])
  const handleJSChange = useCallback(e => setJS(e.target.value), [])
  const handleCSSChange = useCallback(e => setCSS(e.target.value), [])

  return (
    <form onSubmit={handleSumbit}>
      Submit a solution:
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
