import React from 'react'
import Layout from './../../components/Layout'

import { Container } from 'react-bootstrap'

const Thesis = () => (
  <Layout
    crumbs={[
      {label: 'Index', path: '/'},
      {label: 'Thesis', path: '/thesis'},
    ]}>
    <Container className='pt-4'>
      <section className='mb-5'>
        <h1>Thesis</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </Container>
  </Layout>
)

export default Thesis
