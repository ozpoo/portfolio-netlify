import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from './../components/Layout'
import Content, { HTMLContent } from './../components/Content'
import AnimateIn from './../components/AnimateIn'

import { Container } from 'react-bootstrap'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Container className='py-4 px-xs-4 px-sm-5'>
      <AnimateIn className='mb-5'>
        <h1>{title}</h1>
      </AnimateIn>
      <AnimateIn className='mb-5'>
        <PageContent content={content} />
      </AnimateIn>
    </Container>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
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
        title
      }
    }
  }
`
