import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from './../../components/Layout'
import AnimateIn from '../../components/AnimateIn'

import { Container, ListGroup } from 'react-bootstrap'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Container className='py-4 px-3'>
      <Helmet title={`Tags | ${title}`} />
      <AnimateIn className='mb-5'>
        <h1>Tags</h1>
      </AnimateIn>
      <AnimateIn className='mb-5'>
        <ListGroup>
          {group.map((tag) => (
            <ListGroup.Item key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </AnimateIn>
    </Container>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
