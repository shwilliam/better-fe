import React, {useCallback} from 'react'
import {TextInput} from 'carbon-components-react'
import {useInput} from '../hooks'
import {Tag} from './'

export const TagInput = ({tags, onChange}) => {
  const [tagInput, handleChange, clearTagInput] = useInput()
  const addTag = useCallback(() => {
    onChange([...tags, tagInput.toLowerCase()])
    clearTagInput()
  }, [onChange, tagInput, tags, clearTagInput])
  const removeTag = useCallback(
    idx => {
      const tagsCopy = [...tags]
      tagsCopy.splice(idx, 1)
      onChange(tagsCopy)
    },
    [onChange, tags],
  )
  const checkForSubmitKey = useCallback(
    e => {
      if (
        [
          13, // enter
          188, // comma
          32, // space
        ].includes(e.keyCode) &&
        !tags.includes(tagInput) &&
        tagInput.trim().length
      ) {
        addTag()
        e.preventDefault()
      }
    },
    [addTag, tagInput, tags],
  )

  return (
    <>
      <TextInput
        id="tag-input"
        className="input"
        labelText="Tags (optional)"
        placeholder="Layout, animation..."
        onKeyDown={checkForSubmitKey}
        value={tagInput}
        onChange={handleChange}
      />

      <div>
        {tags.map((tag, idx) => (
          <Tag key={tag} idx={idx} onRemove={removeTag}>
            {tag}
          </Tag>
        ))}
      </div>
    </>
  )
}
