import React, {useCallback, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_SOLUTION} from '../context'
import {useEditor} from '../hooks'
import {Preview} from './'

export const NewSolutionForm = ({boilerplate}) => {
  const {id} = useParams()
  const history = useHistory()
  const {
    html,
    js,
    css,
    handleHTMLChange,
    handleJSChange,
    handleCSSChange,
  } = useEditor(boilerplate)
  const [author, setAuthor] = useState('')
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
      }).then(() => {
        history.push('/problems')
      })
    },
    [createSolution, author, html, js, css, id, history],
  )

  const handleAuthorChange = useCallback(e => setAuthor(e.target.value), [])
  return (
    <>
      <Preview js={js} html={html} css={css} />

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

        <label className="editor__input-label --fullwidth">
          Author (optional):
          <input
            className="editor__input"
            type="text"
            name="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
