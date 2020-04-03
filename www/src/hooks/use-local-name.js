import {useLocalStorage} from './'

export const useLocalName = () => {
  const [name, setName] = useLocalStorage('__name', '')
  return [name, setName]
}
