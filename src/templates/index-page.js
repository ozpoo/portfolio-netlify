import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from './../components/Layout'
import Features from './../components/Features'
import WorkTeaser from './../components/WorkTeaser'
import StudiesRoll from './../components/StudiesRoll'
import NewsTeaser from './../components/NewsTeaser'
import JournalRoll from './../components/JournalRoll'

import AnimateIn from './../components/AnimateIn'

import { Container } from 'react-bootstrap'

export const IndexPageTemplate = ({
  intro_text,
  sections,
}) => (
  <Container className='py-4 px-3'>
    <AnimateIn className='mb-5'>
      <h1 dangerouslySetInnerHTML={{__html: intro_text}} />
    </AnimateIn>

    <Features gridItems={sections} />

    <AnimateIn className='mb-5'>
      <h2>01 <span className='text-muted'>— Work</span></h2>
    </AnimateIn>
    <WorkTeaser />

    <AnimateIn className='mb-5'>
      <h2>02 <span className='text-muted'>— Case Studies</span></h2>
    </AnimateIn>
    <StudiesRoll limit={4} />

    <AnimateIn className='mb-5'>
      <h2>03 <span className='text-muted'>— News</span></h2>
    </AnimateIn>
    <NewsTeaser />

    <AnimateIn className='mb-5'>
      <h2>04 <span className='text-muted'>— Journal</span></h2>
    </AnimateIn>
    <JournalRoll />
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
