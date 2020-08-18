import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql, StaticQuery } from 'gatsby'
import { Card, Row, Col, Button } from 'react-bootstrap'

import PreviewCompatibleImage from './PreviewCompatibleImage'
import AnimateIn from './AnimateIn'

import Tilt from 'react-tilt'

class StudiesRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Row>
        {posts && posts.map(({ node: post }) => (
          <Col xs={12} md={6} lg={4} key={post.id}>
            <AnimateIn className='mb-4'>
              <Tilt
                className='tilt'
                options={{
                  reverse:        false,  // reverse the tilt direction
                  max:            15,     // max tilt rotation (degrees)
                  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
                  scale:          1.04,      // 2 = 200%, 1.5 = 150%, etc..
                  speed:          300,    // Speed of the enter/exit transition
                  transition:     true,   // Set a transition on enter/exit.
                  axis:           null,   // What axis should be disabled. Can be X or Y.
                  reset:          true,    // If the tilt effect has to be reset on exit.
                  easing:         'cubic-bezier(.03,.98,.52,.99)',    // Easing on enter/exit.
                }}>
                <Card as='article' className={post.frontmatter.featuredpost ? 'is-featured' : ''}>
                  <Card.Header as='header'>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link> &mdash; {post.frontmatter.date}
                  </Card.Header>
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  ) : null}
                  <Card.Body>
                    {post.excerpt}
                  </Card.Body>
                  <Card.Footer>
                    <Button as={Link} to={post.fields.slug}>
                      Keep Reading &rarr;
                    </Button>
                  </Card.Footer>
                </Card>
              </Tilt>
            </AnimateIn>
          </Col>
        ))}
      </Row>
    )
  }
}

StudiesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query StudiesRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "studies-post" } } }
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
                    fluid(maxWidth: 240, quality: 100) {
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
    render={(data, count) => <StudiesRoll data={data} count={count} />}
  />
)
