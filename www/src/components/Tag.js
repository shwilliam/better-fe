import React, {useCallback} from 'react'
import {Tag as CarbonTag} from 'carbon-components-react'
import {noop} from '../utils'

export const Tag = ({children, idx, onRemove}) => {
  const handleRemove = useCallback(() => {
    onRemove(idx)
  }, [idx, onRemove])

  return (
    <CarbonTag
      type="cyan"
      onClick={onRemove ? handleRemove : noop}
      filter={!!onRemove}
    >
      {children}
    </CarbonTag>
  )
}
