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
        <Container className='px-3'>
          <AnimateIn className='my-7'>
            <h1>Work <span className='text-muted'>&mdash; some would say I like to keep myself busy &mdash; here's some of the stuff I've been up to.</span></h1>
          </AnimateIn>
          <section className='mb-5'>
            <WorkRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
