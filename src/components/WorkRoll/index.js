import './style.sass'

import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql, StaticQuery } from 'gatsby'
import { Card, Row, Col } from 'react-bootstrap'

import PreviewCompatibleImage from './../PreviewCompatibleImage'
import AnimateIn from './../AnimateIn'

import Tilt from 'react-tilt'

class WorkRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Row>
        {posts && posts.map(({ node: post }) => (
          <Col xs={6} lg={4} xl={3} key={post.id} className='mb-5'>
            <AnimateIn>
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
                <Card as={Link} to={post.fields.slug} className={post.frontmatter.featuredpost ? 'is-featured global-work-card' : 'global-work-card'}>
                  <Card.Header as='h5' className='m-0'>
                    {post.frontmatter.title}
                    <span className='text-muted'> &mdash; {post.frontmatter.tags.join(' & ')}</span>
                  </Card.Header>
                  <div className='aspect-ratio-box'>
                    {post.frontmatter.featuredimage ? (
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    ) : (
                      <PreviewCompatibleImage
                        imageInfo={{
                          type: 'url',
                          image: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D',
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }} />
                    )}
                  </div>
                  {post.excerpt &&
                    <Card.Body>
                      {post.excerpt}
                    </Card.Body>
                  }
                  <Card.Footer>
                    <div className='hover-plus'>
                      <svg>
                        <line x1='0' y1='50%' x2='100%' y2='50%' />
                        <line x1='50%' y1='0' x2='50%' y2='100%' />
                      </svg>
                    </div>
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

WorkRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query WorkRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-post" } } }
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
                tags
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
    render={(data, count) => <WorkRoll data={data} count={count} />}
  />
)
