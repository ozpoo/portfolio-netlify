import React, { Component } from 'react'

import Layout from './../../components/Layout'
import AnimateIn from './../../components/AnimateIn'
import ThesisRoll from './../../components/ThesisRoll'

import { Container } from 'react-bootstrap'

export default class ThesisIndexPage extends Component {
  render() {
    return (
      <Layout
        crumbs={[
          {label: 'Index', path: '/'},
          {label: 'Thesis', path: '/work'},
        ]}>
        <Container className='py-4 px-xs-4 px-sm-5'>
          <AnimateIn className='mb-5'>
          <h1>Thesis <span className='text-muted'>&mdash; a chronicle that presents myriad passions and undertakings I have pursued.</span></h1>
          </AnimateIn>
          <section className='mb-5'>
            <ThesisRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
