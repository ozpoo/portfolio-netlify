import './style.sass'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { graphql, StaticQuery } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import StudiesCard from './../StudiesCard'

import { Link } from 'gatsby'
import AnimateIn from './../AnimateIn'

class StudiesTeaser extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Row className='global-studies-teaser-grid mb-5'>
        {posts && posts.map(({ node: post }) => (
          <Col xs={12} lg={6} key={post.id} className='column mb-4'>
            <StudiesCard post={post} />
          </Col>
        ))}
        <Col xs={12}>
          <AnimateIn>
            <Link to='/studies'>
              Browse Case Studies &rarr;
            </Link>
          </AnimateIn>
        </Col>
      </Row>
    )
  }
}

StudiesTeaser.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query StudiesTeaserQuery {
        allMarkdownRemark(
          limit: 2,
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
    render={(data, count) => <StudiesTeaser data={data} count={count} />}
  />
)
