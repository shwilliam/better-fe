import React from 'react'
import {Tabs, Tab, TextArea, CodeSnippet} from 'carbon-components-react'

export const Editor = ({
  html,
  onHtmlChange = () => {},
  js,
  onJsChange = () => {},
  css,
  onCssChange = () => {},
  readOnly = false,
}) => (
  <div className="editor__input-container">
    <Tabs>
      <Tab id="html-editor" label="HTML">
        {readOnly ? (
          <CodeSnippet type="multi">
            {html || 'Nothing to see here...'}
          </CodeSnippet>
        ) : (
          <TextArea
            labelText="HTML editor"
            placeholder="<p>Hello world</p>"
            hideLabel={true}
            value={html}
            onChange={onHtmlChange}
          />
        )}
      </Tab>
      <Tab id="js-editor" label="JS">
        {readOnly ? (
          <CodeSnippet type="multi">
            {js || 'Nothing to see here...'}
          </CodeSnippet>
        ) : (
          <TextArea
            labelText="JS editor"
            placeholder="console.log('🚀')"
            hideLabel={true}
            value={js}
            onChange={onJsChange}
          />
        )}
      </Tab>
      <Tab id="css-editor" label="CSS">
        {readOnly ? (
          <CodeSnippet type="multi">
            {css || 'Nothing to see here...'}
          </CodeSnippet>
        ) : (
          <TextArea
            labelText="CSS editor"
            placeholder={`a {
  color: papayawhip;
}`}
            hideLabel={true}
            value={css}
            onChange={onCssChange}
          />
        )}
      </Tab>
    </Tabs>
  </div>
)
