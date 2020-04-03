import {useInput} from './use-input'

export const useEditor = boilerplate => {
  const [html, handleHTMLChange] = useInput(boilerplate?.html || '')
  const [js, handleJSChange] = useInput(boilerplate?.js || '')
  const [css, handleCSSChange] = useInput(boilerplate?.css || '')

  return {
    html,
    js,
    css,
    handleHTMLChange,
    handleJSChange,
    handleCSSChange,
  }
}
