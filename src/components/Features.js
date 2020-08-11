import React from 'react'
import PropTypes from 'prop-types'

import { Accordion, Card, Row, Col } from 'react-bootstrap'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <Row>
    {gridItems.map((item) => (
      <Col xs={12} md={6} key={item.text} className='mb-4'>
        <Card>
          <Card.Header>{item.title}</Card.Header>
          <Card.Body>
            <div className='mx-auto my-5 w-25'>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <p>{item.text}</p>
            <Accordion>
              {item.list.map((item, index) => (
                <Card className={index}>
                  <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                    {item.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>{item.description}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Card.Body>
        </Card>
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
