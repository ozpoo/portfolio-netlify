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
        <Container className='py-4 px-3'>
          <AnimateIn className='mb-5'>
            <h1>Case Studies <span className='text-muted'>&mdash; deep dives into the problems, process, &amp; solutions of my work.</span></h1>
          </AnimateIn>

          <section className='mb-5'>
            <StudiesRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
