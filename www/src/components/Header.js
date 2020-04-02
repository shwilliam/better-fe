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
    history.push('/problems/recent')
  }, [history])
  const navigateToPopularProblems = useCallback(() => {
    history.push('/problems/popular')
  }, [history])
  const navigateToProblems = useCallback(() => {
    history.push('/problems')
  }, [history])
  const navigateToNewProblem = useCallback(() => {
    history.push('/problem/new')
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
            onClick={navigateToProblems}
            className="nav__link"
            aria-label="All problems"
          >
            All
          </HeaderGlobalAction>
          <HeaderGlobalAction
            onClick={navigateToRecentProblems}
            className="nav__link"
            aria-label="Recent problems"
          >
            Recent
          </HeaderGlobalAction>
          <HeaderGlobalAction
            onClick={navigateToPopularProblems}
            className="nav__link"
            aria-label="Popular problems"
          >
            Popular
          </HeaderGlobalAction>
          <HeaderGlobalAction
            onClick={navigateToNewProblem}
            className="nav__link"
            aria-label="New problem"
          >
            Submit
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </CarbonHeader>
    </>
  )
}
