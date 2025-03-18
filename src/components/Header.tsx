import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import gladeLogo from '../images/glade_logo.svg'

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
`

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  opacity: 0.8;
`

const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.md};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm} 0;
  }
`

const HamburgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  `}
`

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer to="/">
          <LogoImage src={gladeLogo} alt="The Grove Logo" />
          <LogoText>The Grove</LogoText>
        </LogoContainer>
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/personal" onClick={() => setIsMenuOpen(false)}>Personal CRM</NavLink>
          <NavLink to="/community" onClick={() => setIsMenuOpen(false)}>Community CRM</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}

export default Header 