import React, {useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {
  Header as CarbonHeader,
  HeaderName,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react'

export const Header = () => {
  const history = useHistory()
  const navigateToHome = useCallback(() => {
    history.push('/')
  }, [history])
  const navigateToRecentProblems = useCallback(() => {
    history.push('/recent-problems')
  }, [history])
  const navigateToProblems = useCallback(() => {
    history.push('/problems')
  }, [history])
  const navigateToNewProblem = useCallback(() => {
    history.push('/new-problem')
  }, [history])

  return (
    <>
      <h1 className="sr-only" id="site-title">
        Better FE
      </h1>
      <CarbonHeader aria-labelledby="site-title">
        <SkipToContent />
        <HeaderName
          className="clickable"
          onClick={navigateToHome}
          prefix="Better"
        >
          [FE]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            onClick={navigateToRecentProblems}
            className="nav__link"
            aria-label="Recent problems"
          >
            Recent problems
          </HeaderGlobalAction>
          <HeaderGlobalAction
            onClick={navigateToProblems}
            className="nav__link"
            aria-label="All problems"
          >
            All problems
          </HeaderGlobalAction>
          <HeaderGlobalAction
            onClick={navigateToNewProblem}
            className="nav__link"
            aria-label="New problem"
          >
            New problem
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </CarbonHeader>
    </>
  )
}
