import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

let NavContainer = styled.div `
  background-color: ${props => props.theme.black};
  display: flex;
  flex-direction: row;
  height: 50px;
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

let NavBuffer = styled.div`
  height: 50px;
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
  top: 50px;
  right: 0;
  transition: width 0.2s ease-out;
  z-index: 1;
`

let MenuBtn = styled.input`
  display: none;

  &:checked ~ ${MenuColumn} {
    width: 50vw;
    height: calc(100vh - 50px)
  }
`

let MenuIcon = styled.label`
  cursor: pointer;
  margin-left: auto;
  padding: 28px 10%;
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
    top: -8px;
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


export default class NavBar extends Component {
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

  getMenuItems(isMobile) {
    let index = 0
    return this.props.menuItems.map((item) => {
      if (item["disabled"]) {
        return <DisabledMenuLink
          key={index++}
          styled={{isMobile}}
          mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
          to={""}
          onClick={this.negateClick}
        >
          {isMobile ? <MobileItem>{item["name"]}</MobileItem> : <DesktopItem>{item["name"]}</DesktopItem>}
          <Soon mobile={isMobile}>Coming Soon!</Soon>
        </DisabledMenuLink>
      }
      else {
        return <MenuLink
          key={index++}
          styled={{isMobile}}
          mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
          to={item["link"]}
          activeClassName={"navLinkActive"}
          onClick={this.forceClose}
        >
          {isMobile ? <MobileItem>{item["name"]}</MobileItem> : <DesktopItem>{item["name"]}</DesktopItem>}
        </MenuLink>
      }
    });
  }

  render() {
    const isMobile = this.state.width < 992;
    const desktopMenu = (
      <React.Fragment>
        <MenuContainer>
          <MenuRow>
            {this.getMenuItems(isMobile)}
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
          {this.getMenuItems(isMobile)}
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
