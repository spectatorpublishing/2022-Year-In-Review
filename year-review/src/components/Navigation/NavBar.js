import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';

let NavContainer = styled.div `
  background-color: ${props => props.theme.black};
  display: flex;
  flex-direction: row;
  height: 48px;
  width: 100vw;

  ${({ fixed }) => fixed && `
    left: 0;
    position: fixed;
    top: 0;
    z-index: 2;
  `}
`

let LogoContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`

let MenuContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: vw;
  width: 70%;
`

let MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
`

let MenuLink = styled(NavLink)`
  color: ${props => props.theme.white};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

    :hover {
      color: ${props => props.theme.blue};
    }

    :focus {
      color: ${props => props.theme.blue};
    }

    &.navLinkActive {
      color: ${props => props.theme.blue};
    }

  ${({ mobile }) => !!mobile && `
    border: none;
    margin: 4vh 0 0 0;
  `}
`

let MenuScrollLink = styled(NavHashLink)`
  cursor: pointer;
  color: ${props => props.theme.white};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    color: ${props => props.theme.blue};
  }

  &.navLinkActive {
    color: ${props => props.theme.blue};
  }

  ${({ mobile }) => !!mobile && `
    border: none;
    margin: 4vh 0 0 0;
  `}
`

let NavBuffer = styled.div`
  height: 48px;
  width: 100%;
`

let MenuColumn = styled.div`
  align-items: center;
  background-color: ${props => props.theme.black};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 0;
  overflow: hidden;
  position: absolute;
  transform: translateY(calc(48px - 1px));
  right: 0;
  transition: width 0.2s ease-out;
  z-index: 20;
`

let MenuBtn = styled.input`
  display: none;

  &:checked ~ ${MenuColumn} {
    width: 50vw;
    height: calc(100vh - 48px)
  }
`

let MenuIcon = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 10%;
  margin-left: auto;
  user-select: none;
`

let NavIcon = styled.span`
  background: ${props => props.theme.white};
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 24px;

  :before,
  :after {
    background: ${props => props.theme.white};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  :before {
    top: 8px;
  }

  :after {
    top: -7px;
  }

  ${MenuBtn}:checked ~ ${MenuIcon} & {
    background: transparent;

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  ${MenuBtn}:checked ~ ${MenuIcon}:not(.steps) & {
    :before,
    :after {
      top: 0;
    }
  }
`

let DesktopItem = styled.h4`
  color: inherit;
`

let MobileItem = styled.h3`
  color: inherit;
`


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedForMobile: false,
      width: window.innerWidth
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.forceClose = this.forceClose.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
    this.getActiveSection = this.getActiveSection.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  handleCheckboxChange(e) {
    this.setState({ checkedForMobile: e.target.checked });
  }

  forceClose() {
    this.setState({ checkedForMobile: false });
  }

  negateClick(e) {
    e.preventDefault();
  }

  getActiveSection(section) {
    return this.props.location.hash.slice(1) === section;
  }
  
  updateTitle(match, name) {
    if (match) {
      document.title = name + " | 2018-19 Year In Review";
    }
  }

  getMenuItems(isMobile, isScrolling) {
    return this.props.menuItems.map((item, i) => {
      // Scrolling navbar uses React Refs to change scroll position
      if (isScrolling) {
        return <MenuScrollLink
          key={i}
          styled={{isMobile}}
          mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
          to={"#" + item.link.slice(1)}
          activeClassName={"navLinkActive"}
          isActive={() => this.getActiveSection(item.link.slice(1))}
          onClick={this.forceClose}
        >
          {isMobile ? <MobileItem>{item.name}</MobileItem> : <DesktopItem>{item.name}</DesktopItem>}
        </MenuScrollLink>
      }
      // Normal navbar uses React Router to change browser locations
      return <MenuLink
        key={i}
        styled={{isMobile}}
        mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
        to={item.link}
        activeClassName={"navLinkActive"}
        isActive={(match, location) => this.updateTitle(match, item.name)}
        onClick={this.forceClose}
      >
        {isMobile ? <MobileItem>{item.name}</MobileItem> : <DesktopItem>{item.name}</DesktopItem>}
      </MenuLink>
    });
  }

  render() {
    const isMobile = this.state.width < 992;
    const desktopMenu = (
      <React.Fragment>
        <MenuContainer>
          <MenuRow>
            {this.getMenuItems(isMobile, this.props.isScrolling)}
          </MenuRow>
        </MenuContainer>
      </React.Fragment>
    );

    const mobileMenu = (
      <React.Fragment>
        <MenuBtn 
          type="checkbox" 
          id="menu-btn" 
          checked={this.state.checkedForMobile}
          onChange={this.handleCheckboxChange}
        />
        <MenuIcon htmlFor="menu-btn">
          <NavIcon></NavIcon>
        </MenuIcon>
        <MenuColumn>
          {this.getMenuItems(isMobile, this.props.isScrolling)}
          <MenuLink
            key={this.props.menuItems.length}
            styled={{isMobile}}
            mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
            as="a"
            href="https://www.columbiaspectator.com/"
            target="_blank"
            onClick={this.forceClose}
          >
            Crown
          </MenuLink>
        </MenuColumn>
      </React.Fragment>
    );
    return (
      <div>
        <NavContainer fixed={this.props.fixed}>
          <LogoContainer>
            <Link to="/">
              Crown
            </Link>
          </LogoContainer>
          {isMobile ? mobileMenu : desktopMenu}
        </NavContainer>
        {this.props.fixed && <NavBuffer></NavBuffer>}
      </div>
    );
  }
}

export default withRouter(NavBar);