import React, {useState, useCallback} from 'react'
import AceEditor from 'react-ace'
import {Tabs, Tab, CodeSnippet, Dropdown} from 'carbon-components-react'
import {noop} from '../utils'
import {useLocalCodeTheme} from '../hooks'

// code editor deps
import 'ace-builds/src-min-noconflict/ext-language_tools'
import 'ace-builds/src-min-noconflict/snippets/html'
import 'ace-builds/src-min-noconflict/snippets/javascript'
import 'ace-builds/src-min-noconflict/snippets/css'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-noconflict/theme-kuroir'
import 'ace-builds/src-noconflict/theme-xcode'
import 'ace-builds/src-noconflict/theme-textmate'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'ace-builds/src-noconflict/theme-solarized_light'
import 'ace-builds/src-noconflict/theme-terminal'

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

const THEME_OPTIONS = {
  fontSize: 15,
  tabSize: 2,
  maxLines: 15,
  minLines: 15,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  editorProps: {
    $blockScrolling: Infinity,
  },
}

export const Editor = ({
  html,
  onHtmlChange = noop,
  js,
  onJsChange = noop,
  css,
  onCssChange = noop,
  readOnly = false,
}) => {
  const [localTheme, setLocalTheme] = useLocalCodeTheme()
  const [activeTheme, setActiveTheme] = useState(THEMES[localTheme])
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

  return (
    <div className="editor__input-container">
      {!readOnly && (
        <Dropdown
          className="editor__input-theme"
          label="Theme"
          id="editor__input-theme"
          items={THEMES}
          itemToString={item => item?.label}
          onChange={handleChangeTheme}
          initialSelectedItem={activeTheme}
        />
      )}
      <Tabs>
        <Tab id="html-editor" label="HTML">
          {readOnly ? (
            <CodeSnippet type="multi">
              {html || 'Nothing to see here...'}
            </CodeSnippet>
          ) : (
            <AceEditor
              name="html-editor"
              mode="html"
              theme={activeTheme.value}
              value={html}
              onChange={onHtmlChange}
              {...THEME_OPTIONS}
            />
          )}
        </Tab>
        <Tab id="js-editor" label="JS">
          {readOnly ? (
            <CodeSnippet type="multi">
              {js || 'Nothing to see here...'}
            </CodeSnippet>
          ) : (
            <AceEditor
              name="js-editor"
              mode="javascript"
              theme={activeTheme.value}
              value={js}
              onChange={onJsChange}
              {...THEME_OPTIONS}
            />
          )}
        </Tab>
        <Tab id="css-editor" label="CSS">
          {readOnly ? (
            <CodeSnippet type="multi">
              {css || 'Nothing to see here...'}
            </CodeSnippet>
          ) : (
            <AceEditor
              name="css-editor"
              mode="css"
              theme={activeTheme.value}
              value={css}
              onChange={onCssChange}
              {...THEME_OPTIONS}
            />
          )}
        </Tab>
      </Tabs>
    </div>
  )
}
