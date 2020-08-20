import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { Image } from 'react-bootstrap'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '0rem' }
  const { alt = '', image } = imageInfo

  if(image && image.type && image.type === 'url')
    return <Image style={imageStyle} src={image} alt={alt} />

  if(image && image.childImageSharp)
    return <Img as={Image} style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
