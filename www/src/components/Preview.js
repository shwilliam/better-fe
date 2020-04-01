import React, {useCallback} from 'react'
import {Button} from 'carbon-components-react'

export const Preview = ({html, js, css}) => {
  const executeJS = useCallback(() => {
    // TODO: catch errors
    eval(js) // eslint-disable-line
  }, [js])

  return (
    <section className="preview">
      <style>{css}</style>
      <Button className="preview__run" onClick={executeJS}>
        Run script
      </Button>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </section>
  )
}
