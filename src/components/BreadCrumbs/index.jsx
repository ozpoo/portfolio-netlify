import React from 'react'
import { Link } from 'gatsby'

import {
  Container
} from 'react-bootstrap'

const BreadCrumbs = (props) => {
  return (
    <Container className='global-breadcrumbs py-3 px-3'>
      <div className='d-flex'>
        {props.crumbs.map((crumb, index) => (
          ((props.crumbs.length - index) > 1) ?
            <div key={index} className='d-flex'>
              <Link className='text-muted' to={crumb.path}>{crumb.label}</Link>
              <div className='text-muted px-1'>&mdash;</div>
            </div>
            :
            <div key={index}>{crumb.label}</div>
          )
        )}
      </div>
    </Container>
  )
}

export default BreadCrumbs
