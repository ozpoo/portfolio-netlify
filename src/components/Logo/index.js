import './style.sass'
import React, { Component } from 'react'

import { Link } from 'gatsby'

import Warp from 'warpjs'
import UIfx from 'uifx'
import bellAudio from './../../../static/audio/wav/03-Primary-System-Sounds/navigation_hover-tap.wav'

class Logo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(props) {
    const svg = document.getElementById('svg-logo')
    let warp = new Warp(svg)

    // warp.interpolate(4)
    warp.transform(([ x, y ]) => [ x, y, x, y ])

    let offset = 0
    let step = 10
    let normal = false
    function animate() {
      if(offset > step) {
        if(normal) {
          warp.transform(([ x, y, ox, oy ]) => [ ox, oy, ox, oy ])
        } else {
          const shiftX = Math.floor(Math.random() * 20) + 1
          const shiftY = Math.floor(Math.random() * 20) + 1
          const scaleX = Math.floor(Math.random() * 5) + 1
          const scaleY = Math.floor(Math.random() * 5) + 1
          warp.transform(([ x, y, ox, oy ]) => [ x + scaleX * Math.cos(y / 16 + shiftX), y + scaleY * Math.cos(x / 16 + shiftY), ox, oy ])
        }
        offset = 0
        step = Math.floor(Math.random() * 5)
        normal = !normal
      }
      offset += 0.1
      requestAnimationFrame(animate)
    }
    animate()

    const bell = typeof window !== 'undefined' && window.document ?
      new UIfx(bellAudio, { volume: 1.0, throttleMs: 0 }) : false

    this.setState({
      bell: bell
    })
  }
  render() {
    const { bell } = this.state
    return (
      <div className='global-logo p-3'>
        <Link onClick={() => bell && bell.play()} to='/'>
          <svg id='svg-logo' version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 100.54 100.54'>
          <path className='st0' d='M100.54,6.36L94.18,0L79.12,15.06C71.26,8.61,61.21,4.73,50.27,4.73c-25.11,0-45.54,20.43-45.54,45.54
          	c0,10.94,3.88,20.99,10.33,28.85L0,94.18l6.36,6.36l15.06-15.06c7.86,6.45,17.91,10.33,28.85,10.33c25.11,0,45.54-20.43,45.54-45.54
          	c0-10.94-3.88-20.99-10.33-28.85L100.54,6.36z M13.73,50.27c0-20.15,16.39-36.54,36.54-36.54c8.46,0,16.24,2.9,22.44,7.74
          	L21.46,72.71C16.62,66.52,13.73,58.73,13.73,50.27z M86.81,50.27c0,20.15-16.39,36.54-36.54,36.54c-8.46,0-16.24-2.9-22.44-7.74
          	l51.25-51.25C83.92,34.03,86.81,41.81,86.81,50.27z'/>
          </svg>
        </Link>
      </div>
    )
  }
}

export default Logo
