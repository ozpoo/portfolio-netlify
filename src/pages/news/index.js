import React, { Component } from 'react'

import Layout from './../../components/Layout'
import AnimateIn from './../../components/AnimateIn'
import NewsRoll from './../../components/NewsRoll'

import { Container } from 'react-bootstrap'

class NewsIndexPage extends Component {
  render() {
    return (
      <Layout
        crumbs={[
          {label: 'Index', path: '/'},
          {label: 'News', path: '/news'},
        ]}>
        <Container className='px-3'>
          <AnimateIn className='my-7'>
            <h1>News <span className='text-muted'>&mdash; updates and milestones across all areas of my design and academic lives.</span></h1>
          </AnimateIn>

          <section className='mb-5'>
            <NewsRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}

export default NewsIndexPage
