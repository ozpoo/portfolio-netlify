import React, { Component } from 'react'

import Layout from './../../components/Layout'
import AnimateIn from '../../components/AnimateIn'

import { Container, Row, Col } from 'react-bootstrap'

import {aPMS, aRGB} from './script.js'

class Pantone extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <Layout
        crumbs={[
          {label: 'Index', path: '/'},
          {label: 'Pantone', path: '/pantone'},
        ]}>
        <Container className='py-4 px-3'>
          <AnimateIn className='mb-5'>
            <h1>Pantone</h1>
          </AnimateIn>

          <Row>
          {aPMS.map((color, index) =>
            <Col xs={2}>
              <AnimateIn className='mb-5'>
                <div className='p-3' style={{background: '#' + aRGB[index]}}>
                  {color} <br />
                  {aRGB[index]}
                </div>
              </AnimateIn>
            </Col>
          )}
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Pantone
