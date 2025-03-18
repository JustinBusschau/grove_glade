import { css } from 'styled-components';
import styled from 'styled-components';

// Global style variables
export const background = {
  app: '#0F1119', // Rich Black
  appInverse: '#E3E3E3', // Platinum
  positive: '#548C2F', // Maximum Green
  negative: '#FFD449', // Mustard
  warning: '#FFADCA', // Nadeshiko Pink
};

export const color = {
  // Palette
  primary: '#00E2F4', // sky blue crayola
  secondary: '#FF47B1', // wild strawberry
  tertiary: '#E3E3E3', // Platinum

  // Monochrome
  lightest: '#E3E3E3', // Platinum
  lighter: '#4BB4E0', // Cyan process
  light: '#3D99A5', // Cadet blue
  mediumlight: '#5176EB', // Blue crayola
  medium: '#B376C4', // Lavender floral
  mediumdark: '#8C8DD0', // Blue bell
  dark: '#4A4A4A', // Davys Grey
  darker: '#2C2D31', // Jet
  darkest: '#1C1E25', // Raisin Black

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#57886C', // Viridian
  negative: '#E03616', // Vermilion
  warning: '#FFF689', // Canary
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    brand: '"Comfortaa", "Helvetica Neue", Helvetica, Arial, sans-serif',
    primary: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s0: '10',
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90',
  },
};

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

export const breakSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(min-width: ${breakSizes.mobileS})`,
  mobileM: `(min-width: ${breakSizes.mobileM})`,
  mobileL: `(min-width: ${breakSizes.mobileL})`,
  tablet: `(min-width: ${breakSizes.tablet})`,
  laptop: `(min-width: ${breakSizes.laptop})`,
  laptopL: `(min-width: ${breakSizes.laptopL})`,
  desktop: `(min-width: ${breakSizes.desktop})`,
  desktopL: `(min-width: ${breakSizes.desktop})`,
};

export const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;
`

export const StyledListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  padding-left: 1.5em;
  position: relative;

  &::before {
    content: "🌿";
    position: absolute;
    left: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`