import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql, StaticQuery } from 'gatsby'
import { Card, Row, Col, Button } from 'react-bootstrap'

import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Row>
        {posts && posts.map(({ node: post }) => (
          <Col xs={12} md={6} lg={4} key={post.id}>
            <Card as='article' className={post.frontmatter.featuredpost ? 'is-featured' : ''}>
              <Card.Header as='header'>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link> &mdash; {post.frontmatter.date}
              </Card.Header>
              <Card.Body>
                {post.frontmatter.featuredimage ? (
                  <p className='w-100'>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </p>
                ) : null}
                {post.excerpt}
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to={post.fields.slug}>
                  Keep Reading &rarr;
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 120)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
