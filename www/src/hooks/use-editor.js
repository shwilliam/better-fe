import {useState, useCallback} from 'react'
import {useLocalCodeTheme} from './'

export const useEditor = boilerplate => {
  const [html, handleHTMLChange] = useState(boilerplate?.html || '')
  const [js, handleJSChange] = useState(boilerplate?.js || '')
  const [css, handleCSSChange] = useState(boilerplate?.css || '')

  const [localTheme, setLocalTheme] = useLocalCodeTheme()
  const [theme, setActiveTheme] = useState(THEMES[localTheme])
  const handleChangeTheme = useCallback(
    selection => {
      const theme = selection?.selectedItem
      if (theme) {
        setLocalTheme(THEMES.findIndex(({value}) => value === theme.value))
        setActiveTheme(theme)
      }
    },
    [setLocalTheme],
  )

  return {
    html,
    js,
    css,
    handleHTMLChange,
    handleJSChange,
    handleCSSChange,
    theme,
    allThemes: THEMES,
    handleChangeTheme,
  }
}

const THEMES = [
  {
    label: 'Tomorrow',
    value: 'tomorrow',
  },
  {
    label: 'Monokai',
    value: 'monokai',
  },
  {
    label: 'GitHub',
    value: 'github',
  },
  {
    label: 'Kuroir',
    value: 'kuroir',
  },
  {
    label: 'Xcode',
    value: 'xcode',
  },
  {
    label: 'Text mate',
    value: 'textmate',
  },
  {
    label: 'Solarized dark',
    value: 'solarized_dark',
  },
  {
    label: 'Solarized light',
    value: 'solarized_light',
  },
  {
    label: 'Terminal',
    value: 'terminal',
  },
]
