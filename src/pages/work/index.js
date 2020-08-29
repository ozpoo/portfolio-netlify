import React from 'react'

import Layout from './../../components/Layout'
import AnimateIn from './../../components/AnimateIn'
import WorkRoll from './../../components/WorkRoll'

import { Container } from 'react-bootstrap'


export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout
        crumbs={[
          {label: 'Index', path: '/'},
          {label: 'Work', path: '/work'},
        ]}>
        <Container className='py-4 px-xs-4 px-sm-5'>
          <AnimateIn className='mb-5'>
          <h1>Work <span className='text-muted'>&mdash; I like to stay busy &mdash; so here is a collection of some things I have created.</span></h1>
          </AnimateIn>
          <section className='mb-5'>
            <WorkRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
