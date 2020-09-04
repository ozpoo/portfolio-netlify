import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { graphql, StaticQuery } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import TagsList from './../TagsList'
import WorkCard from './../WorkCard'

import { useQueryParam, StringParam } from 'use-query-params'

class WorkRoll extends Component {
  render() {
    const { data, filter } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        <TagsList current={filter ? filter : 'All'} posts={posts} className='mb-5' />

        <Row className='mb-5'>
          {posts && posts.filter(({ node: post }) => filter ? post.frontmatter.tags.includes(filter) : true).map(({ node: post }) => (
            <Col key={post.id} xs={12} sm={6} lg={4} xl={3} className='mb-4'>
              <WorkCard post={post} />
            </Col>
          ))}
        </Row>
      </>
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

export default () => {
  const [tag, setTag] = useQueryParam('tag', StringParam)
  console.log(tag)
  return (
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
      render={(data, count) => <WorkRoll filter={tag} data={data} count={count} />}
    />
  )
}
