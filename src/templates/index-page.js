import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql } from 'gatsby'

import Layout from './../components/Layout'
import Features from './../components/Features'
import BlogRoll from './../components/BlogRoll'

import AnimateIn from './../components/AnimateIn'

import { Container } from 'react-bootstrap'

export const IndexPageTemplate = ({
  intro_text,
  sections,
}) => (
  <Container className='pt-4'>
    <AnimateIn className='mb-5'>
      <h1>{intro_text}</h1>
    </AnimateIn>

    <Features gridItems={sections} />
    <AnimateIn className='mb-5'>
      <Link to='/products'>See all products</Link>
    </AnimateIn>

    <AnimateIn>
      <h3>Recent Projects</h3>
    </AnimateIn>
    <BlogRoll />
    <AnimateIn className='mb-5'>
      <Link to='/work'>Read more</Link>
    </AnimateIn>

    <AnimateIn>
      <h3>Latest News</h3>
    </AnimateIn>
    <BlogRoll />
    <AnimateIn>
      <Link to='/blog'>Read more</Link>
    </AnimateIn>
  </Container>
)

IndexPageTemplate.propTypes = {
  intro_text: PropTypes.string,
  sections: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout crumbs={[{label: 'Index', path: '/'}]}>
      <IndexPageTemplate
        intro_text={frontmatter.intro_text}
        sections={frontmatter.sections}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro_text
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
      }
    }
  }
`
