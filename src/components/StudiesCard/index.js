import './style.sass'

import React, { Component } from 'react'

import { Link } from 'gatsby'
import { Card, Button } from 'react-bootstrap'

import PreviewCompatibleImage from './../PreviewCompatibleImage'
import AnimateIn from './../AnimateIn'

import UIfx from 'uifx'
import bellAudio from './../../../static/audio/wav/01-Hero-Sounds/hero_simple-celebration-01.wav'
import hoverAudio from './../../../static/audio/wav/04-Secondary-System-Sounds/navigation_unavailable-selection.wav'

import Tilt from 'react-tilt'

class StudiesCard extends Component {
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
      <AnimateIn className='mb-4'>
        <Tilt
          className='tilt'
          options={{
            reverse:        false,  // reverse the tilt direction
            max:            15,     // max tilt rotation (degrees)
            perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
            scale:          1.04,      // 2 = 200%, 1.5 = 150%, etc..
            speed:          300,    // Speed of the enter/exit transition
            transition:     true,   // Set a transition on enter/exit.
            axis:           null,   // What axis should be disabled. Can be X or Y.
            reset:          true,    // If the tilt effect has to be reset on exit.
            easing:         'cubic-bezier(.03,.98,.52,.99)',    // Easing on enter/exit.
          }}>
          <Card
            as={Link}
            onMouseEnter={() => hover && hover.play()}
            onClick={() => bell && bell.play()}
            to={post.fields.slug}
            className={post.frontmatter.featuredpost ? 'is-featured global-studies-card' : 'global-studies-card'}>
            <Card.Header as='header'>
              {post.frontmatter.title}
            </Card.Header>
            {post.frontmatter.featuredimage ? (
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                }}
              />
            ) : null}
            <Card.Body>
              {post.excerpt}
            </Card.Body>
            <Card.Footer>
              <Button>
                Learn &rarr;
              </Button>
            </Card.Footer>
          </Card>
        </Tilt>
      </AnimateIn>
    )
  }
}

export default StudiesCard
