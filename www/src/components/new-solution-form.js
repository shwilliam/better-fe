import React, {useCallback} from 'react'
import {useParams} from 'react-router-dom'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_SOLUTION} from '../context'
import {useEditor, useLocalName, useInput, useNavigation} from '../hooks'
import {Button, Form, TextInput} from 'carbon-components-react'
import {Preview, Editor} from './'

export const NewSolutionForm = ({boilerplate}) => {
  const {navigateToProblems} = useNavigation()
  const {id} = useParams()
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
      }).then(navigateToProblems)
    },
    [
      createSolution,
      author,
      html,
      js,
      css,
      id,
      setLocalName,
      navigateToProblems,
    ],
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
