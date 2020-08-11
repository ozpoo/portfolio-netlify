import React from 'react'
import { Link } from 'gatsby'

import { Container, ListGroup, Row, Col } from 'react-bootstrap'

const Footer = class extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Link to='/'>Home</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/about'>About</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/products'>Products</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/contact/examples'>Form Examples</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className='navbar-item'
                  href='/admin/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Admin
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Link to='/blog'>Latest Stories</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/contact'>Contact</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <a title='facebook' href='https://facebook.com'>Facebook</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a title='twitter' href='https://twitter.com'>Twitter</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a title='instagram' href='https://instagram.com'>Instagram</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a title='vimeo' href='https://vimeo.com'>Vimeo</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer
