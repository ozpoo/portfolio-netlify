import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from './../components/Layout'
import Content, { HTMLContent } from './../components/Content'
import AnimateIn from './../components/AnimateIn'

import { Container, Row, Col } from 'react-bootstrap'

export const AboutPageTemplate = ({ title, intro_text, content, contentComponent }) => {
  const PageContent = contentComponent || Content


  return (
    <Container className='px-3'>
      <AnimateIn className='my-7'>
        <h1 dangerouslySetInnerHTML={{__html: intro_text}} />
      </AnimateIn>
      <Row>
        <Col xs={8}>
          <AnimateIn className='mb-5'>
            <PageContent content={content} />
          </AnimateIn>
        </Col>
        <Col xs={4}>
          <AnimateIn className='mb-5'>
            Other stuffs
          </AnimateIn>
        </Col>
      </Row>
    </Container>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro_text: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      crumbs={[
        {label: 'Index', path: '/'},
        {label: 'About', path: '/about'},
      ]}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        intro_text={post.frontmatter.intro_text}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        intro_text
      }
    }
  }
`
