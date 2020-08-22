import React from 'react'

import Layout from './../../components/Layout'
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
        <Container className='py-4 px-3'>
          <section className='mb-5'>
            <WorkRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
