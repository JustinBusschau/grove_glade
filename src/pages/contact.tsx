import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import gladeLogo from '../images/glade_logo.svg';
import validator from 'validator';
const HeroSection = styled.section`
  min-height: 40vh;
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

const FormSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ErrorMessage = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  color: #e03616;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = e => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError('');
      setIsValid(true);
    } else {
      setEmailError('Invalid email address');
      setIsValid(false);
    }
    setEmail(email);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setEmailError('');
    setMessage('');
    setIsValid(false);
  };

  const handleSubmit = () => {
    console.log(`name: ${name}, email: ${email}, message: ${message}`);
    setTimeout(() => resetForm(), 1000);
  };

  return (
    <Layout>
      <HeroSection>
        <LeafDecoration />
        <HeroContent>
          <Title>Get in Touch</Title>
          <Subtitle>
            Have questions about The Grove? We'd love to hear from you.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <FormSection>
        <FormContainer>
          <iframe
            title="dummyframe"
            name="dummyframe"
            id="dummyframe"
            style={{ display: 'none' }}
          ></iframe>
          <Form
            name="contact"
            id="contact"
            data-netlify="true"
            netlify
            netlify-honeypot="honorific"
            method="POST"
            target="dummyframe"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Ivy Fern"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormGroup>

            <div style={{ display: 'none' }}>
              <FormGroup>
                <Label htmlFor="honorific">Honorific</Label>
                <Input
                  type="text"
                  id="honorific"
                  name="honorific"
                  placeholder="Ms"
                />
              </FormGroup>
            </div>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="ivy.fern@greene.com"
                value={email}
                onChange={e => validateEmail(e)}
              />
              <ErrorMessage>{emailError}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Please tell me more about The Glade..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </FormGroup>

            {name && email && message && isValid === true ? (
              <SubmitButton type="submit">Send Message</SubmitButton>
            ) : (
              <SubmitButton type="submit" disabled>
                Send Message
              </SubmitButton>
            )}
          </Form>
        </FormContainer>
      </FormSection>
    </Layout>
  );
}
