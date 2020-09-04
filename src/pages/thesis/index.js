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
        <Container className='px-3'>
          <AnimateIn className='my-7'>
          <h1>MFA Thesis <span className='text-muted'>&mdash; I can so I will, now we must: A creative response to Selfie Culture</span></h1>
          </AnimateIn>
          <section className='mb-5'>
            <ThesisRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
