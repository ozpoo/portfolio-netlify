import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import { Container } from 'react-bootstrap'

export const StudiesPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Container className='py-4 px-3'>
      {helmet || ''}

      <section className='mb-5'>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <section className='mb-5'>
        <PostContent content={content} />
      </section>

      <section className='mb-5'>
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
      </section>
    </Container>
  )
}

StudiesPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  helmet: PropTypes.object,
}

const StudiesPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      crumbs={[
        {label: 'Index', path: '/'},
        {label: 'Studies', path: '/studies'},
        {label: post.frontmatter.title, path: '/studies/' + post.frontmatter.title},
      ]}>
      <StudiesPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Studies">
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

StudiesPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default StudiesPost

export const pageQuery = graphql`
  query StudiesPostByID($id: String!) {
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
