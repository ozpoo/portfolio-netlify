import React from 'react'
import PropTypes from 'prop-types'

import { Accordion, Card, Row, Col } from 'react-bootstrap'

import PreviewCompatibleImage from './PreviewCompatibleImage'
import AnimateIn from './AnimateIn'

import Tilt from 'react-tilt'

const FeatureGrid = ({ gridItems }) => (
  <Row>
    {gridItems.map((item) => (
      <Col xs={6} lg={4} xl={3} key={item.text}>
        <AnimateIn className='mb-4'>
          <Tilt
            className='tilt'
            options={{
              reverse:        false,  // reverse the tilt direction
              max:            15,     // max tilt rotation (degrees)
              perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
              scale:          1.04,      // 2 = 200%, 1.5 = 150%, etc..
              speed:          300,    // Speed of the enter/exit transition
              transition:     true,   // Set a transition on enter/exit.
              axis:           null,   // What axis should be disabled. Can be X or Y.
              reset:          true,    // If the tilt effect has to be reset on exit.
              easing:         'cubic-bezier(.03,.98,.52,.99)',    // Easing on enter/exit.
            }}>
            <Card>
              <Card.Header className='text-monospace'>{item.title}</Card.Header>
              <PreviewCompatibleImage imageInfo={item}/>
              <Card.Body>
                {item.text}
              </Card.Body>
              <Accordion>
                {item.list.map((item, index) => (
                  <Card key={item.title} className={index}>
                    <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                      {item.title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index.toString()}>
                      <Card.Body>{item.description}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Card>
          </Tilt>
        </AnimateIn>
      </Col>
    ))}
  </Row>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
