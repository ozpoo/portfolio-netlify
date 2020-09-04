import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

import { Container, Button } from 'react-bootstrap'

class TagRoute extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout
        crumbs={[
          {label: 'Index', path: '/'},
          {label: 'Tags', path: '/tags'},
          {label: this.props.pageContext.tag, path: '/tags/' + this.props.pageContext.tag},
        ]}>
        <Container className='py-4 px-xs-4 px-sm-5' fluid>
          <Helmet title={`${tag} | ${title}`} />
          <section className='mb-5'>
            <h1>{tagHeader}</h1>
          </section>
          <section className='mb-5'>
            <ul className='list-unstyled'>{postLinks}</ul>
          </section>
          <section className='mb-5'>
            <Button as={Link} to='/tags/'>Browse all tags</Button>
          </section>
        </Container>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title,
            tags
          }
        }
      }
    }
  }
`
