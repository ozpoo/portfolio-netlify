import React from 'react'

import Layout from '../../components/Layout'
import WorkRoll from '../../components/WorkRoll'

import { Container } from 'react-bootstrap'

export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container className='pt-5'>
          <section className='mb-5'>
            <h1>Latest Projects</h1>
          </section>

          <section className='mb-5'>
            <WorkRoll />
          </section>
        </Container>
      </Layout>
    )
  }
}
