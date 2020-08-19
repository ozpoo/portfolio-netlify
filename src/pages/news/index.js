import React from 'react'

import Layout from './../../components/Layout'
import AnimateIn from './../../components/AnimateIn'
import NewsRoll from './../../components/NewsRoll'

import { Container } from 'react-bootstrap'

export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout
        crumbs={[
          {label: 'Index', path: '/'},
          {label: 'News', path: '/news'},
        ]}>
        <Container className='py-4 px-3'>
          <AnimateIn className='mb-5'>
            <h1>News</h1>
          </AnimateIn>

          <section className='mb-5'>
            <NewsRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
