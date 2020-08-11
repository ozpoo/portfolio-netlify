import React from 'react'
import PropTypes from 'prop-types'

import { Card, Row, Col } from 'react-bootstrap'

const Pricing = ({ data }) => (
  <Row>
    {data.map((price) => (
      <Col xs={12} md={4} key={price.plan}>
        <Card>
          <Card.Header as='h5'>
            {price.plan}
          </Card.Header>
          <Card.Body>
            <h2>${price.price}</h2>
            <p>{price.description}</p>
            <ul>
              {price.items.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
