import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  )
}

export default IndexPage
