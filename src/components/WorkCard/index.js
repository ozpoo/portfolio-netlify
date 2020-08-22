import './style.sass'

import React, { Component } from 'react'

import UIfx from 'uifx'
import bellAudio from './../../../static/audio/wav/01-Hero-Sounds/hero_simple-celebration-01.wav'
import hoverAudio from './../../../static/audio/wav/04-Secondary-System-Sounds/navigation_unavailable-selection.wav'

import { Link } from 'gatsby'
import { Card } from 'react-bootstrap'

import PreviewCompatibleImage from './../PreviewCompatibleImage'
import AnimateIn from './../AnimateIn'

import Tilt from 'react-tilt'

class WordCard extends Component {
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
          <Card as={Link} onMouseEnter={() => hover && hover.play()} onClick={() => bell && bell.play()} to={post.fields.slug} className={post.frontmatter.featuredpost ? 'is-featured global-work-card' : 'global-work-card'}>
            <Card.Header as='h5' className='m-0'>
              {post.frontmatter.title}
              <span className='text-muted'> &mdash; {post.frontmatter.tags.join(' & ')}</span>
            </Card.Header>
            <div className='aspect-ratio-box'>
              {post.frontmatter.featuredimage ? (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  }}
                />
              ) : (
                <PreviewCompatibleImage
                  imageInfo={{
                    type: 'url',
                    image: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D',
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  }} />
              )}
            </div>
            {post.excerpt &&
              <Card.Body>
                {post.excerpt}
              </Card.Body>
            }
            <Card.Footer>
              <div className='hover-plus'>
                <svg>
                  <line x1='0' y1='50%' x2='100%' y2='50%' />
                  <line x1='50%' y1='0' x2='50%' y2='100%' />
                </svg>
              </div>
            </Card.Footer>
          </Card>
        </Tilt>
      </AnimateIn>
    )
  }
}

export default WordCard
