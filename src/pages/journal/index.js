import React, { Component } from 'react'

import Layout from './../../components/Layout'
import AnimateIn from './../../components/AnimateIn'
import JournalRoll from './../../components/JournalRoll'

import { Container } from 'react-bootstrap'

class JournalIndexPage extends Component {
  render() {
    return (
      <Layout
        crumbs={[
          {label: 'Index', path: '/'},
          {label: 'Journal', path: '/journal'},
        ]}>
        <Container className='px-3'>
          <AnimateIn className='my-7'>
            <h1>Journal <span className='text-muted'>&mdash; a look into my thoughts, dreams, eassays &mdash; and maybe even a few rants.</span></h1>
          </AnimateIn>

          <section className='mb-5'>
            <JournalRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}

export default JournalIndexPage
