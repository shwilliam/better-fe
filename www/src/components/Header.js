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
          onClick={navigateToProblems}
          prefix="Better"
        >
          [FE]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            onClick={navigateToProblems}
            className="nav__link"
            aria-label="Problems"
          >
            Problems
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
