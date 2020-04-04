import {useState} from 'react'

export const useEditor = boilerplate => {
  const [html, handleHTMLChange] = useState(boilerplate?.html || '')
  const [js, handleJSChange] = useState(boilerplate?.js || '')
  const [css, handleCSSChange] = useState(boilerplate?.css || '')

  return {
    html,
    js,
    css,
    handleHTMLChange,
    handleJSChange,
    handleCSSChange,
  }
}
