import './style.sass'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import { graphql, StaticQuery } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import AnimateIn from './../AnimateIn'
import WorkCard from './../WorkCard'

class WorkTeaser extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Row className='global-work-teaser-grid mb-5'>
        {posts && posts.map(({ node: post }) => (
          <Col xs={6} md={6} lg={4} xl={3} key={post.id} className='column mb-4'>
            <WorkCard post={post} />
          </Col>
        ))}
        <Col xs={12}>
          <AnimateIn>
            <Link to='/work'>
              Browse Work &rarr;
            </Link>
          </AnimateIn>
        </Col>
      </Row>
    )
  }
}

WorkTeaser.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query WorkTeaserQuery {
        allMarkdownRemark(
          limit: 4,
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
                    fluid(maxWidth: 260, quality: 100) {
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
    render={(data, count) => <WorkTeaser data={data} count={count} />}
  />
)
