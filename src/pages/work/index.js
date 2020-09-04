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
        <Container className='py-4 px-xs-4 px-sm-5' fluid>
          <AnimateIn className='mb-5'>
            <h1>Work <span className='text-muted'>&mdash; you could say I like to keep myself busy &mdash; here's some of the stuff I've been geeking out on recently.</span></h1>
          </AnimateIn>
          <section className='mb-5'>
            <WorkRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
