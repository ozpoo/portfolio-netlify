import './style.sass'
import React, { Component } from 'react'

import UIfx from 'uifx'
import bellAudio from './../../../static/audio/wav/01-Hero-Sounds/hero_simple-celebration-01.wav'
import hoverAudio from './../../../static/audio/wav/04-Secondary-System-Sounds/navigation_unavailable-selection.wav'

import { Link } from 'gatsby'

import AnimateIn from './../AnimateIn'

class ThesisCard extends Component {
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
        <Link onMouseEnter={() => hover && hover.play()} onClick={() => bell && bell.play()} to={post.fields.slug}>
          <h2>
            {post.frontmatter.title}
          </h2>
        </Link>
      </AnimateIn>
    )
  }
}

export default ThesisCard
