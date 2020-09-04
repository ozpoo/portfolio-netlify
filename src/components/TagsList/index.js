import './style.sass'

import React, { Component } from 'react'
import _ from 'lodash'

import { Link } from 'gatsby'

import AnimateIn from './../AnimateIn'
import { Button } from 'react-bootstrap'

class TagsList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { posts, className, current } = this.props

    let tags = []
    posts.forEach((edge) => {
      if(_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    const map = tags.reduce((p, c) => {
      p[c] = (p[c] || 0) + 1
      return p
    }, {})

    tags = Object.keys(map).map(val => {return { name: val, val: map[val] }}).sort((a, b) => {
      return b.val - a.val
    })

    return (
      <div className={'global-tags-list' + className ? className : ''}>
        <AnimateIn>
          <Button as={Link} variant={current === 'All' ? 'secondary' : undefined} className='mb-1 mr-1' to='/work'>
            All
          </Button>
          {tags && tags.map((tag) => (
            <Button as={Link} variant={current === tag.name ? 'secondary' : undefined} key={tag.name} className='mb-1 mr-1' to={'?tag=' + tag.name}>
              {tag.name} &mdash; {tag.val}
            </Button>
          ))}
        </AnimateIn>
      </div>
    )
  }
}

export default TagsList
