import React, {useCallback, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_PROBLEM} from '../context'
import {useEditor} from '../hooks'
import {Button, Form, TextInput} from 'carbon-components-react'
import {Editor, Preview, TagInput} from './'

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
  const [tags, setTags] = useState([])
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
          tags,
        },
      }).then(() => {
        history.push('/problems')
      })
    },
    [createProblem, author, description, html, js, css, tags, history],
  )

  const handleAuthorChange = useCallback(e => setAuthor(e.target.value), [])
  const handleDescriptionChange = useCallback(
    e => setDescription(e.target.value),
    [],
  )

  return (
    <>
      <h2 className="title">New Problem</h2>

      <Form onSubmit={handleSumbit}>
        <TextInput
          id="new-problem-editor-description-input"
          className="input"
          labelText="Description"
          placeholder="Center div in div"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <TextInput
          id="new-problem-editor-author-input"
          className="input"
          labelText="Author (optional)"
          placeholder="Jane Doe"
          value={author}
          onChange={handleAuthorChange}
        />
        <TagInput tags={tags} onChange={setTags} />
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
    </>
  )
}
