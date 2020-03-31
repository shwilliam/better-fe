import React, {useCallback, useState} from 'react'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_PROBLEM} from '../context'

export const NewProblemForm = () => {
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  // TODO: loading indicator
  const [createProblem, {loading}] = useMutation(CREATE_PROBLEM, {
    refetchQueries: ['allProblems'],
  })

  const handleSumbit = useCallback(
    e => {
      e.preventDefault()

      createProblem({
        variables: {
          author,
          description,
        },
      })
      setAuthor('')
      setDescription('')
    },
    [createProblem, author, description],
  )

  const handleAuthorChange = useCallback(e => setAuthor(e.target.value), [])
  const handleDescriptionChange = useCallback(
    e => setDescription(e.target.value),
    [],
  )

  return (
    <form onSubmit={handleSumbit}>
      Submit a problem:
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
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
