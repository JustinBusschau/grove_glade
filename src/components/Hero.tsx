import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import gladeLogo from '../images/glade_logo.svg'

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 1;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.2;
`

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

const Button = styled(Link)`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  transition: all 0.2s ease;

  &.primary {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`

const LeafDecoration = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: url(${gladeLogo});
  opacity: 0.8;
  right: -50px;
  top: 100px;
  pointer-events: none;
`

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <LeafDecoration />
      <HeroContent>
        <Title>Welcome to The Grove</Title>
        <Subtitle>
          A mindful CRM platform that helps you nurture your relationships, whether personal or professional.
          Designed with care for neurodiverse users and small organizations.
        </Subtitle>
        <ButtonGroup>
          <Button to="/personal" className="primary">
            Explore Personal CRM
          </Button>
          <Button to="/community" className="secondary">
            Explore Community CRM
          </Button>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero 
