import React from 'react'

import Layout from './../../components/Layout'
import AnimateIn from './../../components/AnimateIn'
import JournalRoll from './../../components/JournalRoll'

import { Container } from 'react-bootstrap'

export default class JournalIndexPage extends React.Component {
  render() {
    return (
      <Layout
        crumbs={[
          {label: 'Index', path: '/'},
          {label: 'Journal', path: '/journal'},
        ]}>
        <Container className='py-4 px-3'>
          <AnimateIn className='mb-5'>
            <h1>Journal</h1>
          </AnimateIn>

          <section className='mb-5'>
            <JournalRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
