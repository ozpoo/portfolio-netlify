import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from './../components/Layout'
import AnimateIn from './../components/AnimateIn'
import Content, { HTMLContent } from '../components/Content'

import { Container, Row, Col } from 'react-bootstrap'

export const ThesisPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Container className='py-4 px-xs-4 px-sm-5'>
      {helmet || ''}

      <AnimateIn className='mb-5'>
        <h1>{title}</h1>
      </AnimateIn>

      <Row>
        <Col xs={8}>
          <AnimateIn className='mb-5'>
            <PostContent content={content} />
          </AnimateIn>
        </Col>
        <Col xs={4}>
          <AnimateIn className='mb-5'>
            {tags && tags.length ? (
              <section>
                <h4>Tags</h4>
                <ul>
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </AnimateIn>
        </Col>
      </Row>
    </Container>
  )
}

ThesisPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  helmet: PropTypes.object,
}

const ThesisPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      crumbs={[
        {label: 'Index', path: '/'},
        {label: 'Thesis', path: '/thesis'},
        {label: post.frontmatter.title, path: '/thesis/' + post.frontmatter.title},
      ]}>
      <ThesisPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Thesis">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

ThesisPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ThesisPost

export const pageQuery = graphql`
  query ThesisPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
