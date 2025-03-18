import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
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

const Features: React.FC = () => {
  const personalFeatures = [
    'Emotionally aware prompts for social activity',
    'Low-energy contact suggestions',
    'Reduced cognitive load for social interactions',
    'Customizable interaction preferences',
    'Gentle reminders and notifications',
    'Visual relationship mapping',
  ];

  const communityFeatures = [
    'Free and open source',
    'Lightweight and efficient',
    'Perfect for small organizations',
    'Easy to extend and customize',
    'Simple contact management',
    'Basic reporting tools',
  ];

  return (
    <FeaturesSection>
      <Container>
        <SectionTitle>Features</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureTitle>Personal CRM</FeatureTitle>
            <FeatureDescription>
              Designed with neurodiverse users in mind, helping you maintain
              meaningful relationships with less stress.
            </FeatureDescription>
            <FeatureList>
              {personalFeatures.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeatureList>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Community CRM</FeatureTitle>
            <FeatureDescription>
              A lightweight solution for small organizations and charities,
              focusing on simplicity and effectiveness.
            </FeatureDescription>
            <FeatureList>
              {communityFeatures.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeatureList>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
