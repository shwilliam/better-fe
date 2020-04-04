import React from 'react'
import {
  Header as CarbonHeader,
  HeaderName,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react'
import {useNavigation} from '../hooks'

export const Header = () => {
  const {
    navigateToHome,
    navigateToRecentProblems,
    navigateToPopularProblems,
    navigateToProblems,
    navigateToNewProblem,
  } = useNavigation()

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
