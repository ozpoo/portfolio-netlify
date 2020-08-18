import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql } from 'gatsby'

import Layout from './../components/Layout'
import Features from './../components/Features'
import WorkRoll from './../components/WorkRoll'
import JournalRoll from './../components/JournalRoll'

import AnimateIn from './../components/AnimateIn'

import { Container, Card, Row, Col } from 'react-bootstrap'

export const IndexPageTemplate = ({
  intro_text,
  sections,
}) => (
  <Container className='pt-4'>
    <AnimateIn className='mb-5'>
      <h1>{intro_text}</h1>
    </AnimateIn>

    <AnimateIn className='mb-5'>
      <Card>
        <Card.Img style={{height: '420px', objectFit: 'cover'}} src='img/chemex.jpg' alt='Card image' />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </AnimateIn>

    <Row>
      <Col xs={12} md={6} lg={8}>
        <AnimateIn className='mb-5'>
          <Card>
            <Card.Header className='text-monospace'>Card title</Card.Header>
            <Card.Img variant='bottom' style={{height: '320px', objectFit: 'cover'}} src='img/chemex.jpg' alt='Card image' />
          </Card>
        </AnimateIn>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <AnimateIn className='mb-5'>
          <Card>
            <Card.Header className='text-monospace'>Card title</Card.Header>
            <Card.Img variant='bottom' style={{height: '320px', objectFit: 'cover'}} src='img/chemex.jpg' alt='Card image' />
          </Card>
        </AnimateIn>
      </Col>
    </Row>

    <Features gridItems={sections} />
    <AnimateIn className='mb-5'>
      <Link to='/products'>See all products</Link>
    </AnimateIn>

    <AnimateIn>
      <h3>Recent Projects</h3>
    </AnimateIn>
    <WorkRoll />
    <AnimateIn className='mb-5'>
      <Link to='/work'>Read more</Link>
    </AnimateIn>

    <AnimateIn>
      <h3>Latest News</h3>
    </AnimateIn>
    <JournalRoll />
    <AnimateIn>
      <Link to='/blog'>Read more</Link>
    </AnimateIn>
  </Container>
)

IndexPageTemplate.propTypes = {
  intro_text: PropTypes.string,
  sections: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout crumbs={[{label: 'Index', path: '/'}]}>
      <IndexPageTemplate
        intro_text={frontmatter.intro_text}
        sections={frontmatter.sections}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro_text
        sections {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          list {
            title
            description
          }
        }
      }
    }
  }
`
