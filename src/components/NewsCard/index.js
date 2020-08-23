import './style.sass'

import React, { Component } from 'react'

import UIfx from 'uifx'
import bellAudio from './../../../static/audio/wav/01-Hero-Sounds/hero_simple-celebration-01.wav'
import hoverAudio from './../../../static/audio/wav/04-Secondary-System-Sounds/navigation_unavailable-selection.wav'

import { Link } from 'gatsby'
import { Card, Button } from 'react-bootstrap'

import AnimateIn from './../AnimateIn'
import Tilt from './../Tilt'

class NewsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const bell = typeof window !== 'undefined' && window.document ?
      new UIfx(bellAudio, { volume: 1.0, throttleMs: 100 }) : false

    const hover = typeof window !== 'undefined' && window.document ?
      new UIfx(hoverAudio, { volume: 1.0, throttleMs: 100 }) : false

    this.setState({
      bell: bell,
      hover: hover
    })
  }

  render() {
    const { post } = this.props
    const { bell, hover } = this.state

    return (
      <AnimateIn>
        <Tilt>
          <Card as={Link} onMouseEnter={() => hover && hover.play()} onClick={() => bell && bell.play()} to={post.fields.slug} className={post.frontmatter.featuredpost ? 'is-featured global-news-card' : 'global-news-card'}>
            <Card.Header as='h5' className='m-0'>
              {post.frontmatter.title}
              <span className='text-muted'> &mdash; {post.frontmatter.tags && post.frontmatter.tags.join(' & ')}</span>
            </Card.Header>
            <Card.Body>
              {post.frontmatter.description}
            </Card.Body>
          </Card>
        </Tilt>
      </AnimateIn>
    )
  }
}

export default NewsCard
