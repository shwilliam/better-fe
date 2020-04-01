import React, {useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {
  Header as CarbonHeader,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
  HeaderMenuItem,
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
    <HeaderContainer
      render={({isSideNavExpanded, onClickSideNavExpand}) => (
        <>
          <CarbonHeader aria-label="Better FE">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName onClick={navigateToProblems} prefix="Better">
              [FE]
            </HeaderName>
            <HeaderNavigation aria-label="Better [FE]">
              <HeaderMenuItem href="#" onClick={navigateToProblems}>
                Problems
              </HeaderMenuItem>
              <HeaderMenuItem href="#" onClick={navigateToNewProblem}>
                New problem
              </HeaderMenuItem>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
            >
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem href="#" onClick={navigateToProblems}>
                    Problems
                  </HeaderMenuItem>
                  <HeaderMenuItem href="#" onClick={navigateToNewProblem}>
                    New problem
                  </HeaderMenuItem>
                </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
          </CarbonHeader>
        </>
      )}
    />
  )
}
