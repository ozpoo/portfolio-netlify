import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from './../components/Layout'
import AnimateIn from './../components/AnimateIn'
import Content, { HTMLContent } from './../components/Content'
import PreviewCompatibleImage from './../components/PreviewCompatibleImage'

import { Container, Row, Col } from 'react-bootstrap'

export const WorkPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
  tags,
  title,
  helmet,
  prev,
  next,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Container className='py-4 px-xs-4 px-sm-5'>
      {helmet || ''}

      <AnimateIn className='mb-4'>
        <h1>{title}</h1>
      </AnimateIn>

      <Row>
        <Col xs={8}>
          <AnimateIn className='mb-4'>
            {featuredimage &&
              <div className='featured-image-wrapper'>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredimage,
                    alt: `featured image thumbnail for post ${title}`,
                  }}
                />
              </div>
            }
          </AnimateIn>
          <AnimateIn className='mb-5'>
            <PostContent content={content} />
          </AnimateIn>
        </Col>
        <Col xs={4}>
          <AnimateIn className='mb-5'>
            {prev && <Link to={prev.fields.slug}>Previous</Link>}
            {next && <Link to={next.fields.slug}>Next</Link>}
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

WorkPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  helmet: PropTypes.object,
}

const WorkPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      crumbs={[
        {label: 'Index', path: '/'},
        {label: 'Work', path: '/work'},
        {label: post.frontmatter.title, path: '/work/' + post.frontmatter.title},
      ]}>
      <WorkPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Work">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        featuredimage={post.frontmatter.featuredimage}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        prev={pageContext.prev}
        next={pageContext.next}
      />
    </Layout>
  )
}

WorkPost.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WorkPost

export const pageQuery = graphql`
  query WorkPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 690, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
