import React, {useCallback, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_PROBLEM} from '../context'
import {useEditor} from '../hooks'

export const NewProblemForm = () => {
  const history = useHistory()
  const {
    html,
    js,
    css,
    handleHTMLChange,
    handleJSChange,
    handleCSSChange,
  } = useEditor()
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  // TODO: loading indicator
  const [createProblem] = useMutation(CREATE_PROBLEM, {
    refetchQueries: ['allProblems'],
  })

  const handleSumbit = useCallback(
    e => {
      e.preventDefault()

      createProblem({
        variables: {
          author,
          description,
          html,
          js,
          css,
        },
      }).then(() => {
        history.push('/problems')
      })
    },
    [createProblem, author, description, html, js, css, history],
  )

  const handleAuthorChange = useCallback(e => setAuthor(e.target.value), [])
  const handleDescriptionChange = useCallback(
    e => setDescription(e.target.value),
    [],
  )

  return (
    <form className="editor" onSubmit={handleSumbit}>
      <label className="editor__input-label">
        HTML:
        <textarea
          className="editor__input --code"
          name="HTML"
          value={html}
          onChange={handleHTMLChange}
        />
      </label>
      <label className="editor__input-label">
        JS:
        <textarea
          className="editor__input --code"
          name="JS"
          value={js}
          onChange={handleJSChange}
        />
      </label>
      <label className="editor__input-label">
        CSS:
        <textarea
          className="editor__input --code"
          name="CSS"
          value={css}
          onChange={handleCSSChange}
        />
      </label>
      Submit a problem:
      <label className="editor__input-label --fullwidth">
        Author:
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleAuthorChange}
        />
      </label>
      <label className="editor__input-label --fullwidth">
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
