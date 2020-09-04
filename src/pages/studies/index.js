import React, { Component } from 'react'

import Layout from './../../components/Layout'
import AnimateIn from './../../components/AnimateIn'
import StudiesRoll from './../../components/StudiesRoll'

import { Container } from 'react-bootstrap'

export default class StudiesIndexPage extends Component {
  render() {
    return (
      <Layout
        crumbs={[
          {label: 'Index', path: '/'},
          {label: 'Studies', path: '/studies'},
        ]}>
        <Container className='px-3'>
          <AnimateIn className='my-7'>
            <h1>Case Studies <span className='text-muted'>&mdash; a more intimate look into how I think and the way my process unfolds.</span></h1>
          </AnimateIn>
          <section className='mb-5'>
            <StudiesRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
