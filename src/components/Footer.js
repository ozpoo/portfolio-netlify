import React, { Component } from 'react'
import { Link } from 'gatsby'

import AnimateIn from './AnimateIn'

import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap'

import UIfx from 'uifx'
import bellAudio from './../../static/audio/wav/03-Primary-System-Sounds/navigation_hover-tap.wav'

const Footer = class extends Component {
  render() {
    const bell = new UIfx(
      bellAudio,
      {
        volume: 1.0, // number between 0.0 ~ 1.0
        throttleMs: 0
      }
    )
    return (
      <Container className='global-footer py-4 px-3'>
        <Row>
          <Col xs={12} md={4}>
            <AnimateIn>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item as={Link} to='/' onClick={() => bell.play()}>
                    Home
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to='/about' onClick={() => bell.play()}>
                    About
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to='/work' onClick={() => bell.play()}>
                    Work
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to='/products' onClick={() => bell.play()}>
                    Products
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to='/contact/examples' onClick={() => bell.play()}>
                    Form Examples
                  </ListGroup.Item>
                  <ListGroup.Item action href='/admin' target='_blank' rel='noopener noreferrer' onClick={() => bell.play()}>
                    Admin
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </AnimateIn>
          </Col>
          <Col xs={12} md={4}>
            <AnimateIn>
              <ListGroup>
                <ListGroup.Item>
                  <Link to='/blog' onClick={() => bell.play()}>Latest Stories</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to='/contact' onClick={() => bell.play()}>Contact</Link>
                </ListGroup.Item>
              </ListGroup>
            </AnimateIn>
          </Col>
          <Col xs={12} md={4}>
            <AnimateIn>
              <ListGroup>
                <ListGroup.Item>
                  <a title='facebook' href='https://facebook.com' onClick={() => bell.play()}>Facebook</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a title='twitter' href='https://twitter.com' onClick={() => bell.play()}>Twitter</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a title='instagram' href='https://instagram.com' onClick={() => bell.play()}>Instagram</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a title='vimeo' href='https://vimeo.com' onClick={() => bell.play()}>Vimeo</a>
                </ListGroup.Item>
              </ListGroup>
            </AnimateIn>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer
