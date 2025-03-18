import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import gladeLogo from '../images/glade_logo.svg'

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.primary} 100%);
  color: ${({ theme }) => theme.colors.darkest};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const BrandSection = styled.div`
  flex: 1;
  max-width: 400px;
`

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: url(${gladeLogo});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkest};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const LinksSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const LinksTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.darkest};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkest};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.darkest};
  opacity: 0.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TopSection>
          <BrandSection>
            <Logo />
            <Description>
              The Grove is a mindful CRM platform designed for neurodiverse users and community organizations.
            </Description>
          </BrandSection>

          <LinksSection>
            <LinksList>
              <LinksTitle>Navigation</LinksTitle>
              <FooterLink to="/personal">Personal CRM</FooterLink>
              <FooterLink to="/community">Community CRM</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </LinksList>
          </LinksSection>
        </TopSection>

        <BottomSection>
          <Copyright>
            © {new Date().getFullYear()} The Grove. All rights reserved.
          </Copyright>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer 