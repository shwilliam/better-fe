const OPTION_DEFAULTS = {chars: 40, clean: true, ellipses: true}

export const truncate = (text, options = {}) => {
  const mergedOptions = {...OPTION_DEFAULTS, ...options}
  const {chars, clean, ellipses} = mergedOptions

  const over = text.length > chars
  const a = text.substring(0, chars)
  const end = clean ? a.lastIndexOf(' ') : a.length
  const b = over ? a.substring(0, end) : text
  const e = over && ellipses ? '...' : ''

  return `${b}${e}`
}
