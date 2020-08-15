import React from 'react'
import Layout from './../../components/Layout'

import { Container } from 'react-bootstrap'

const Resume = () => (
  <Layout
    crumbs={[
      {label: 'Index', path: '/'},
      {label: 'Resume', path: '/resume'},
    ]}>
    <Container className='pt-4'>
      <section className='mb-5'>
        <h1>Resume</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </Container>
  </Layout>
)

export default Resume
