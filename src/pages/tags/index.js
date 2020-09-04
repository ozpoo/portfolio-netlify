import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from './../../components/Layout'
import AnimateIn from '../../components/AnimateIn'

import { Container, Button } from 'react-bootstrap'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout
    crumbs={[
      {label: 'Index', path: '/'},
      {label: 'Tags', path: '/tags'},
    ]}>
    <Container className='py-4 px-xs-4 px-sm-5' fluid>
      <Helmet title={`Tags | ${title}`} />
      <AnimateIn className='mb-5'>
        <h1>Tags</h1>
      </AnimateIn>
      <AnimateIn className='mb-5 d-flex'>
        {group.sort((a, b) => a.totalCount < b.totalCount ? 1 : -1).map((tag) => (
          <Button className='m-1' as={Link} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Button>
        ))}
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
