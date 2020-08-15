import React from 'react'
import PropTypes from 'prop-types'

import { Accordion, Card, Row, Col } from 'react-bootstrap'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import AnimateIn from './../components/AnimateIn'

const FeatureGrid = ({ gridItems }) => (
  <Row>
    {gridItems.map((item) => (
      <Col xs={12} md={6} lg={4} key={item.text} className='mb-4'>
        <AnimateIn>
          <Card>
            <Card.Header>{item.title}</Card.Header>
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
