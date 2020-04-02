import React, {useMemo} from 'react'

const generatePreviewMarkup = (html, js, css) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Preview</title>
  <style>${css}</style>
</head>
<body>
${html}
<script>${js}</script>
</body>
</html>
`

export const Preview = ({id, html, js, css}) => {
  const markup = useMemo(() => generatePreviewMarkup(html, js, css), [
    html,
    js,
    css,
  ])

  return (
    <iframe srcDoc={markup} title={`Preview ${id || ''}`} className="preview" />
  )
}
