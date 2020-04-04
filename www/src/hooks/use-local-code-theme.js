import {useLocalStorage} from './'

export const useLocalCodeTheme = () => {
  const [theme, setTheme] = useLocalStorage('__theme', 0)
  return [theme, setTheme]
}
