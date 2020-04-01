import React from 'react'
import {Tabs, Tab, TextArea} from 'carbon-components-react'

export const Editor = ({
  html,
  onHtmlChange,
  js,
  onJsChange,
  css,
  onCssChange,
}) => (
  <>
    <Tabs type="container">
      <Tab id="html-editor" label="HTML">
        <TextArea
          labelText="HTML editor"
          placeholder="<p>Hello world</p>"
          hideLabel={true}
          value={html}
          onChange={onHtmlChange}
        />
      </Tab>
      <Tab id="js-editor" label="JS">
        <TextArea
          labelText="JS editor"
          placeholder="console.log('🚀')"
          hideLabel={true}
          value={js}
          onChange={onJsChange}
        />
      </Tab>
      <Tab id="css-editor" label="CSS">
        <TextArea
          labelText="CSS editor"
          placeholder={`a {
  color: papayawhip;
}`}
          hideLabel={true}
          value={css}
          onChange={onCssChange}
        />
      </Tab>
    </Tabs>
  </>
)
