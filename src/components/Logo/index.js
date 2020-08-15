import './style.sass'
import React, { Component } from 'react'

import Warp from 'warpjs'

class Logo extends Component {
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
  }
  render() {
    return (
      <div className='global-logo'>
        <svg id='svg-logo' version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox="0 0 100.54 100.54">
        <path class="st0" d="M100.54,6.36L94.18,0L79.12,15.06C71.26,8.61,61.21,4.73,50.27,4.73c-25.11,0-45.54,20.43-45.54,45.54
        	c0,10.94,3.88,20.99,10.33,28.85L0,94.18l6.36,6.36l15.06-15.06c7.86,6.45,17.91,10.33,28.85,10.33c25.11,0,45.54-20.43,45.54-45.54
        	c0-10.94-3.88-20.99-10.33-28.85L100.54,6.36z M13.73,50.27c0-20.15,16.39-36.54,36.54-36.54c8.46,0,16.24,2.9,22.44,7.74
        	L21.46,72.71C16.62,66.52,13.73,58.73,13.73,50.27z M86.81,50.27c0,20.15-16.39,36.54-36.54,36.54c-8.46,0-16.24-2.9-22.44-7.74
        	l51.25-51.25C83.92,34.03,86.81,41.81,86.81,50.27z"/>
        </svg>


        {/*
        <svg id='svg-logo' version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 24.24 24.24'>
        <path d='M24.24,1.41L22.83,0l-3.18,3.18c-2.04-1.72-4.66-2.76-7.53-2.76c-6.45,0-11.7,5.25-11.7,11.7c0,2.87,1.04,5.49,2.76,7.53
        L0,22.83l1.41,1.41l3.18-3.18c2.04,1.72,4.66,2.76,7.53,2.76c6.45,0,11.7-5.25,11.7-11.7c0-2.87-1.04-5.49-2.76-7.53L24.24,1.41z
         M2.42,12.12c0-5.35,4.35-9.7,9.7-9.7c2.32,0,4.44,0.82,6.11,2.18L4.59,18.23C3.24,16.56,2.42,14.44,2.42,12.12z M21.82,12.12
        c0,5.35-4.35,9.7-9.7,9.7c-2.32,0-4.44-0.82-6.11-2.18L19.65,6.01C21,7.68,21.82,9.8,21.82,12.12z'/>
        </svg>
        */}

        {/*
        <svg id='svg-logo' version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 101.96 101.96'>
        <path class='st0' d='M101.96,7.78L94.18,0L79.75,14.43c-7.92-6.25-17.91-10-28.77-10c-25.66,0-46.54,20.88-46.54,46.54
        	c0,10.85,3.74,20.84,10,28.77L0,94.18l7.78,7.78l14.43-14.43c7.92,6.25,17.91,10,28.77,10c25.66,0,46.54-20.88,46.54-46.54
        	c0-10.85-3.74-20.84-10-28.77L101.96,7.78z M15.44,50.98c0-19.6,15.94-35.54,35.54-35.54c7.82,0,15.05,2.54,20.93,6.84l-9.63,9.63
        	H38.33l-11,11h23.94l-29,29C17.98,66.03,15.44,58.8,15.44,50.98z M86.52,50.98c0,19.6-15.94,35.54-35.54,35.54
        	c-7.82,0-15.05-2.54-20.93-6.84l9.63-9.63h23.94l11-11H50.68l29-29C83.98,35.93,86.52,43.16,86.52,50.98z'/>
        </svg>
        */}
        {/*
        <svg id='svg-logo'version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100.54px' height='100.54px' viewBox='0 0 100.54 100.54'>
        <path class='st0' d='M100.54,6.36L94.18,0L79.12,15.06C71.26,8.61,61.21,4.73,50.27,4.73c-25.11,0-45.54,20.43-45.54,45.54
        	c0,10.94,3.88,20.99,10.33,28.85L0,94.18l6.36,6.36l15.06-15.06c7.86,6.45,17.91,10.33,28.85,10.33c25.11,0,45.54-20.43,45.54-45.54
        	c0-10.94-3.88-20.99-10.33-28.85L100.54,6.36z M13.73,50.27c0-20.15,16.39-36.54,36.54-36.54c8.46,0,16.24,2.9,22.44,7.74
        	L61.99,32.19H35.21l-9,9h26.77L21.46,72.71C16.62,66.52,13.73,58.73,13.73,50.27z M86.81,50.27c0,20.15-16.39,36.54-36.54,36.54
        	c-8.46,0-16.24-2.9-22.44-7.74l10.73-10.73h26.77l9-9H47.56l31.52-31.52C83.92,34.03,86.81,41.81,86.81,50.27z'/>
        </svg>
        */}

      </div>
    )
  }
}

export default Logo