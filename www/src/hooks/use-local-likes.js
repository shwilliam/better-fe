import {useLocalStorage} from './'
import {useCallback} from 'react'

export const useLocalLikes = () => {
  const [likes, setLikes] = useLocalStorage('__likes', [])

  const addLike = useCallback(
    newLike => {
      setLikes(s => [...s, newLike])
    },
    [setLikes],
  )

  return [likes, addLike]
}
