import React from 'react'
import {Link} from 'react-router-dom'
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
} from 'carbon-components-react'

export const Header = () => (
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
          <HeaderName prefix="Better">[FE]</HeaderName>
          <HeaderNavigation aria-label="Better [FE]">
            <Link to="/problems">Problems</Link>
            <Link to="/new-problem">New problem</Link>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <Link to="/problems">Problems</Link>
                <Link to="/new-problem">New problem</Link>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </CarbonHeader>
      </>
    )}
  />
)
