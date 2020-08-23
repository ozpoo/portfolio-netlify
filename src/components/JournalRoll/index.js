import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link, graphql, StaticQuery } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import AnimateIn from './../AnimateIn'
import JournalCard from './../JournalCard'

class JournalRoll extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Row className='mb-5'>
        {posts && posts.map(({ node: post }) => (
          <Col xs={6} lg={4} xl={3} key={post.id} className='mb-4'>
            <JournalCard post={post} />
          </Col>
        ))}
        <Col xs={12}>
          <AnimateIn>
            <Link to='/journal'>
              Browse Journal &rarr;
            </Link>
          </AnimateIn>
        </Col>
      </Row>
    )
  }
}

JournalRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query JournalRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "journal-post" } } }
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
    render={(data, count) => <JournalRoll data={data} count={count} />}
  />
)
