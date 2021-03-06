import './style.sass'

import React from 'react'
import { Link } from 'gatsby'

import { Container } from 'react-bootstrap'

const BreadCrumbs = (props) => {
  return (
    <div className='global-breadcrumbs py-3 px-3'>
      <div className='d-flex'>
        {props.crumbs.map((crumb, index) => (
          ((props.crumbs.length - index) > 1) ?
            <div key={index} style={{maxWidth: '320px'}} className='d-flex text-clamp-1'>
              <Link className='text-muted' to={crumb.path}>{crumb.label}</Link>
              <div className='text-muted px-1'>&mdash;</div>
            </div>
            :
            <div key={index} style={{maxWidth: '320px'}} className='text-crop-1'>{crumb.label}</div>
          )
        )}
      </div>
    </div>
  )
}

export default BreadCrumbs
