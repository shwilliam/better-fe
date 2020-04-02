import React, {useCallback} from 'react'
import {Tag as CarbonTag} from 'carbon-components-react'

export const Tag = ({children, idx, onRemove}) => {
  const handleRemove = useCallback(() => {
    onRemove(idx)
  }, [idx, onRemove])

  return (
    <CarbonTag
      type="cyan"
      onClick={onRemove ? handleRemove : () => {}}
      filter={!!onRemove}
    >
      {children}
    </CarbonTag>
  )
}
