import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import gladeLogo from '../images/glade_logo.svg';

const HeroSection = styled.section`
  min-height: 80vh;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  overflow: hidden;
  margin-top: 70px;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const LeafDecoration = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: url(${gladeLogo});
  opacity: 0.2;
  right: -50px;
  top: 100px;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    height: 200px;
    right: -30px;
    top: 50px;
  }
`;

const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const FeatureItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:before {
    content: '🌿';
  }
`;

const PersonalPage: React.FC = () => {
  const personalFeatures = [
    'Emotionally aware prompts for social activity',
    'Low-energy contact suggestions',
    'Reduced cognitive load for social interactions',
    'Customizable interaction preferences',
    'Gentle reminders and notifications',
    'Visual relationship mapping',
  ];

  return (
    <Layout>
      <HeroSection>
        <LeafDecoration />
        <HeroContent>
          <Title>Personal CRM</Title>
          <Subtitle>
            A mindful relationship management tool designed specifically for
            neurodiverse users. Help you maintain meaningful connections with
            less stress and more joy.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <SectionTitle>Features</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureTitle>Designed for Neurodiverse Users</FeatureTitle>
              <FeatureDescription>
                Created with understanding and care for neurodiverse users,
                helping you maintain meaningful relationships with less stress.
              </FeatureDescription>
              <FeatureList>
                {personalFeatures.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeatureList>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
    </Layout>
  );
};

export default PersonalPage;
