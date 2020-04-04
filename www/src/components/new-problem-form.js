import React, {useCallback, useState, useEffect} from 'react'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_PROBLEM} from '../context'
import {
  useEditor,
  useLocalName,
  useInput,
  useLocalStorage,
  useNavigation,
} from '../hooks'
import {Button, Form, TextInput} from 'carbon-components-react'
import {Editor, Preview, TagInput} from './'

export const NewProblemForm = () => {
  const {navigateToProblems} = useNavigation()
  const [localFormData, setLocalFormData, clearLocalFormData] = useLocalStorage(
    '__new-problem-form-data',
  )
  const {
    html,
    js,
    css,
    handleHTMLChange,
    handleJSChange,
    handleCSSChange,
  } = useEditor({
    html: localFormData?.html || '',
    js: localFormData?.js || '',
    css: localFormData?.css || '',
  })
  const [localName, setLocalName] = useLocalName()
  const [author, handleAuthorChange] = useInput(localName)
  const [description, handleDescriptionChange] = useInput(
    localFormData?.description || '',
  )
  const [tags, setTags] = useState(localFormData?.tags || [])
  // TODO: loading indicator
  const [createProblem] = useMutation(CREATE_PROBLEM, {
    refetchQueries: ['allProblems', 'recentProblems'],
  })

  const handleSumbit = useCallback(
    e => {
      e.preventDefault()

      setLocalName(author)
      clearLocalFormData()

      createProblem({
        variables: {
          author,
          description,
          html,
          js,
          css,
          tags,
        },
      }).then(navigateToProblems)
    },
    [
      createProblem,
      author,
      description,
      html,
      js,
      css,
      tags,
      setLocalName,
      clearLocalFormData,
      navigateToProblems,
    ],
  )

  useEffect(() => {
    const newFormData = {
      description,
      tags,
      html,
      js,
      css,
    }

    if (JSON.stringify(localFormData) !== JSON.stringify(newFormData)) {
      setLocalFormData(newFormData)
    }
  }, [setLocalFormData, localFormData, description, tags, html, js, css])

  return (
    <>
      <h2 className="pad--bottom">New Problem</h2>

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

        <section>
          <h3 className="editor__label">Boilerplate (optional)</h3>
          <div className="editor">
            <Preview js={js} html={html} css={css} />
            <Editor
              html={html}
              js={js}
              css={css}
              onHtmlChange={handleHTMLChange}
              onJsChange={handleJSChange}
              onCssChange={handleCSSChange}
            />
          </div>
        </section>

        <div className="submit__actions">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </>
  )
}
