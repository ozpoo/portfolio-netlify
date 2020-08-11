import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import { Container, Card } from 'react-bootstrap'

export const ProductPageTemplate = ({
  image,
  title,
  sections,
  testimonials,
  fullImage,
  pricing,
}) => (
  <Container className='pt-5'>

    <section className='mb-5'>
      <h1>{title}</h1>
    </section>

    <section className='mb-5'>
      <Features gridItems={sections} />
    </section>

    <section className='mb-5'>
      <Testimonials testimonials={testimonials} />
    </section>

    <section className='mb-5'>
      <Card className='mb-4'>
        <Card.Header as='h2'>
          {pricing.heading}
        </Card.Header>
        <Card.Body>
          <div className='mb-4'>
            {pricing.description}
          </div>
          <Pricing data={pricing.plans} />
        </Card.Body>
      </Card>
    </section>

  </Container>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  sections: PropTypes.array,
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        sections={frontmatter.sections}
        testimonials={frontmatter.testimonials}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sections {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          list {
            title
            description
          }
        }
        testimonials {
          author
          quote
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
