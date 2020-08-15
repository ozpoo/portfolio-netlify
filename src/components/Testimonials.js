import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import AnimateIn from './AnimateIn'

const Testimonials = ({ testimonials }) => (
  testimonials.map((testimonial) => (
    <AnimateIn key={v4()} className='mb-4'>
      {testimonial.quote}
      <br />
      <cite> – {testimonial.author}</cite>
    </AnimateIn>
  ))
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
