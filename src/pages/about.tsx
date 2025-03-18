import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import gladeLogo from '../images/glade_logo.svg';
import { StyledList, StyledListItem } from '../shared/styles';

const HeroSection = styled.section`
  min-height: 60vh;
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
  opacity: 0.8;
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

const ContentSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 800px;
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
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SectionContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const CtaSection = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const CtaButton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection>
        <LeafDecoration />
        <HeroContent>
          <Title>About The Grove</Title>
          <Subtitle>
            Our mission is to make relationship management more accessible,
            mindful, and effective for everyone.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>Our Story</SectionTitle>
          <SectionContent>
            <p>
              The Grove was born from a simple observation: traditional CRM
              systems are often overwhelming and don't account for the diverse
              ways people interact with others. We noticed that neurodiverse
              individuals and small community organizations needed a different
              approach to managing their relationships - one that's more
              intuitive, less stressful, and truly helpful.
            </p>
            <p>
              As developers who care deeply about accessibility and community,
              we set out to create a CRM that would serve these often-overlooked
              needs. We wanted to build something that would help people
              maintain meaningful connections without adding unnecessary
              complexity or cognitive load.
            </p>
          </SectionContent>

          <SectionTitle>Why Open Source?</SectionTitle>
          <SectionContent>
            <p>
              We believe that relationship management tools should be accessible
              to everyone, regardless of their technical expertise or financial
              resources. By making The Grove open source, we're ensuring that:
            </p>
            <StyledList>
              <StyledListItem>
                Anyone can use the software without cost
              </StyledListItem>
              <StyledListItem>
                Organizations can customize it to their specific needs
              </StyledListItem>
              <StyledListItem>
                The community can contribute improvements
              </StyledListItem>
              <StyledListItem>
                Users maintain full control over their data
              </StyledListItem>
            </StyledList>
          </SectionContent>

          <SectionTitle>Hosted Version</SectionTitle>
          <SectionContent>
            <p>
              While The Grove is completely free and open source, we offer a
              hosted version for those who prefer not to manage their own
              servers. The small fee for the hosted version helps us:
            </p>
            <StyledList>
              <StyledListItem>
                Maintain and improve the core software
              </StyledListItem>
              <StyledListItem>
                Provide reliable hosting and support
              </StyledListItem>
              <StyledListItem>Continue developing new features</StyledListItem>
              <StyledListItem>Keep the project sustainable</StyledListItem>
            </StyledList>
            <p>
              We believe in transparency about our business model, and we're
              committed to keeping the hosted version affordable while ensuring
              the open source version remains fully functional.
            </p>
          </SectionContent>
        </Container>
      </ContentSection>

      <CtaSection>
        <Container>
          <SectionTitle>Have Questions?</SectionTitle>
          <SectionContent>
            <p>
              We're here to help! Whether you're interested in using The Grove,
              want to contribute to the project, or just have questions about
              our approach, we'd love to hear from you.
            </p>
          </SectionContent>
          <CtaButton to="/contact">Contact Us</CtaButton>
        </Container>
      </CtaSection>
    </Layout>
  );
};

export default AboutPage;
