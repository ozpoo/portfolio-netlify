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
        <Container className='py-4 px-xs-4 px-sm-5' fluid>
          <AnimateIn className='mb-5'>
            <h1>Case Studies <span className='text-muted'>&mdash; these are meant to give you a more intimate look into how I think and the way my process unfolds.</span></h1>
          </AnimateIn>
          <section className='mb-5'>
            <StudiesRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
