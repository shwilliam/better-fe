import {useState, useCallback} from 'react'

export const useEditor = boilerplate => {
  const [html, setHTML] = useState(boilerplate?.html || '')
  const [js, setJS] = useState(boilerplate?.js || '')
  const [css, setCSS] = useState(boilerplate?.css || '')

  const handleHTMLChange = useCallback(e => setHTML(e.target.value), [])
  const handleJSChange = useCallback(e => setJS(e.target.value), [])
  const handleCSSChange = useCallback(e => setCSS(e.target.value), [])

  return {
    html,
    js,
    css,
    handleHTMLChange,
    handleJSChange,
    handleCSSChange,
  }
}
