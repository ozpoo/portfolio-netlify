import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { graphql, StaticQuery } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import StudiesCard from './../StudiesCard'

class StudiesRoll extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Row className='mb-5'>
        {posts && posts.map(({ node: post }) => (
          <Col xs={12} md={6} xl={4} key={post.id} className='mb-4'>
            <StudiesCard post={post} />
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
                tags
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 540, quality: 100) {
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
