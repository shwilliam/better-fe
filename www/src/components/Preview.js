import React, {useCallback} from 'react'

export const Preview = ({html, js, css}) => {
  const executeJS = useCallback(() => {
    eval(js) // eslint-disable-line
  }, [js])

  return (
    <section className="preview">
      <div dangerouslySetInnerHTML={{__html: html}} />
      <style>{css}</style>
      <button className="preview__run" onClick={executeJS}>
        Run
      </button>
    </section>
  )
}
