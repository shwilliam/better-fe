import {useCallback} from 'react'
import {useHistory} from 'react-router-dom'

export const useNavigation = id => {
  const history = useHistory()
  const navigateToHome = useCallback(() => {
    history.push('/')
  }, [history])
  const navigateToRecentProblems = useCallback(() => {
    history.push('/problems/recent')
  }, [history])
  const navigateToPopularProblems = useCallback(() => {
    history.push('/problems/popular')
  }, [history])
  const navigateToProblems = useCallback(() => {
    history.push('/problems')
  }, [history])
  const navigateToProblem = useCallback(() => {
    history.push(`/problems/${id}`)
  }, [history, id])
  const navigateToNewProblem = useCallback(() => {
    history.push('/problem/new')
  }, [history])
  const navigateToNewSolution = useCallback(() => {
    if (id) history.push(`/problems/${id}/solve`)
  }, [history, id])

  return {
    navigateToHome,
    navigateToRecentProblems,
    navigateToPopularProblems,
    navigateToProblems,
    navigateToProblem,
    navigateToNewProblem,
    navigateToNewSolution,
  }
}
