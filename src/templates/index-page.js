import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from './../components/Layout'
import Features from './../components/Features'
import WorkTeaser from './../components/WorkTeaser'
import StudiesTeaser from './../components/StudiesTeaser'
import NewsTeaser from './../components/NewsTeaser'
import JournalRoll from './../components/JournalRoll'

import AnimateIn from './../components/AnimateIn'

import { Container } from 'react-bootstrap'

export const IndexPageTemplate = ({
  intro_text,
  sections,
}) => (
  <Container className='px-3'>

    <AnimateIn className='intro-stuff my-7'>
      <h1 dangerouslySetInnerHTML={{__html: intro_text}} />
    </AnimateIn>

    {/* <Features gridItems={sections} /> */}
    <WorkTeaser />
    <StudiesTeaser />
    <NewsTeaser />

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
