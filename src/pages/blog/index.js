import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import { Container } from 'react-bootstrap'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container className='pt-5'>
          <section className='mb-5'>
            <h1>Latest Stories</h1>
          </section>

          <section className='mb-5'>
            <BlogRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
