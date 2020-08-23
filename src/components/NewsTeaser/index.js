import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { graphql, StaticQuery } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import NewsCard from './../NewsCard'

import { Link } from 'gatsby'
import AnimateIn from './../AnimateIn'

class NewsRoll extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Row className='mb-5'>
        {posts && posts.map(({ node: post }) => (
          <Col xs={12} md={6} xl={4} key={post.id} className='mb-4'>
            <NewsCard post={post} />
          </Col>
        ))}
        <Col xs={12}>
          <AnimateIn>
            <Link to='/news'>
              Browse News &rarr;
            </Link>
          </AnimateIn>
        </Col>
      </Row>
    )
  }
}

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsTeaserQuery {
        allMarkdownRemark(
          limit: 3,
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
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
    render={(data, count) => <NewsRoll data={data} count={count} />}
  />
)
