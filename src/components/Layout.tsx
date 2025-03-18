import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout 