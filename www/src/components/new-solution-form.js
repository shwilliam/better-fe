import React, {useCallback} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_SOLUTION} from '../context'
import {useEditor, useLocalName, useInput} from '../hooks'
import {Button, Form, TextInput} from 'carbon-components-react'
import {Preview, Editor} from './'

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
  const [localName, setLocalName] = useLocalName()
  const [author, handleAuthorChange] = useInput(localName)
  // TODO: handle errors
  // TODO: loading indicator
  const [createSolution] = useMutation(CREATE_SOLUTION, {
    refetchQueries: ['problem'],
  })

  const handleSumbit = useCallback(
    e => {
      e.preventDefault()

      setLocalName(author)

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
    [createSolution, author, html, js, css, id, history, setLocalName],
  )

  return (
    <Form onSubmit={handleSumbit}>
      <TextInput
        id="new-solution-editor-author-input"
        className="input"
        labelText="Author (optional)"
        placeholder="Jane Doe"
        value={author}
        onChange={handleAuthorChange}
      />

      <section className="editor">
        <Preview js={js} html={html} css={css} />
        <Editor
          html={html}
          js={js}
          css={css}
          onHtmlChange={handleHTMLChange}
          onJsChange={handleJSChange}
          onCssChange={handleCSSChange}
        />
      </section>

      <div className="submit__actions">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  )
}
