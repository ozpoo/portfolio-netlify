import React from 'react'

import Layout from './../../components/Layout'
import AnimateIn from './../../components/AnimateIn'

import { Container } from 'react-bootstrap'

const Resume = () => (
  <Layout
    crumbs={[
      {label: 'Index', path: '/'},
      {label: 'Resume', path: '/resume'},
    ]}>
    <Container className='py-4 px-3'>
      <AnimateIn className='mb-5'>
        <h1>Resume</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </AnimateIn>
    </Container>
  </Layout>
)

export default Resume
