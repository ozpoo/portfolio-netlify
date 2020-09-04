import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from './../components/Layout'
import AnimateIn from './../components/AnimateIn'
import Content, { HTMLContent } from '../components/Content'

import { Container, Row, Col } from 'react-bootstrap'

export const ThesisPostTemplate = class ThesisPostTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({
      images: this.find_images(),
      headers: this.find_headers()
    })
  }

  find_images = () => Array.from(document.getElementsByTagName('img')).map(img => img.src)
  find_headers = () => Array.from(document.querySelectorAll('h1,h2,h3,h4,h5')).map(header => header)

  render() {
    const { images, headers } = this.state
    const { content, contentComponent, description, tags, title, helmet, prev, next } = this.props
    const PostContent = contentComponent || Content

    return (
      <Container className='py-4 px-xs-4 px-sm-5' fluid>
        {helmet || ''}

        <AnimateIn className='mb-5'>
          <h1>{title}</h1>
        </AnimateIn>

        <Row>
          <Col xs={8}>
            <AnimateIn className='mb-5'>
              <PostContent content={content} />
            </AnimateIn>
          </Col>
          <Col xs={4}>
            <AnimateIn className='mb-5'>
              {prev && <Link to={prev.fields.slug}>Previous</Link>}
              {next && <Link to={next.fields.slug}>Next</Link>}
              {tags && tags.length ? (
                <section>
                  <h4>Tags</h4>
                  <ul>
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </AnimateIn>
          </Col>
        </Row>
      </Container>
    )
  }
}

ThesisPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  helmet: PropTypes.object,
}

const ThesisPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  console.log(pageContext)

  return (
    <Layout
      crumbs={[
        {label: 'Index', path: '/'},
        {label: 'Thesis', path: '/thesis'},
        {label: post.frontmatter.title, path: '/thesis/' + post.frontmatter.title},
      ]}>
      <ThesisPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Thesis">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        prev={pageContext.prev}
        next={pageContext.next}
      />
    </Layout>
  )
}

ThesisPost.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ThesisPost

export const pageQuery = graphql`
  query ThesisPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
