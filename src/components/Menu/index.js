import './style.sass'

import React, { Component } from 'react'
import { Link } from 'gatsby'
import Switch from 'react-switch'

import { Container } from 'react-bootstrap'

import useDarkMode from './../use-dark-mode'

import UIfx from 'uifx'
import bellAudio from './../../../static/audio/wav/03-Primary-System-Sounds/navigation_hover-tap.wav'
import shutterAudio from './../../../static/audio/wav/03-Primary-System-Sounds/ui_camera-shutter.wav'

import Search from './../Search'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    typeof window !== 'undefined' && window.document && document.addEventListener('touchstart', function() {}, true)
    const bell = typeof window !== 'undefined' && window.document ?
      new UIfx(bellAudio, { volume: 1.0, throttleMs: 0 }) : false
    const shutter = typeof window !== 'undefined' && window.document ?
      new UIfx(shutterAudio, { volume: 1.0, throttleMs: 0 }) : false

    this.setState({
      bell: bell,
      shutter: shutter
    })
  }

  render() {
    const { bell, shutter } = this.state
    return (
      <div className='global-nav'>
        <div className='py-3 d-flex flex-md-column justify-content-between h-100'>
          <div>
            {/*<Search />*/}
            <ul className='global-nav-list list-unstyled pt-5'>
              <li>
                <Link onClick={() => bell && bell.play()} activeClassName='active' to='/'>Index</Link>
              </li>
            </ul>

            <ul className='global-nav-list list-unstyled mt-4'>
              <li>
                <Link onClick={() => bell && bell.play()} activeClassName='active' to='/work' partiallyActive={true}>Work</Link>
              </li>
              <li>
                <Link onClick={() => bell && bell.play()} activeClassName='active' to='/studies' partiallyActive={true}>Studies</Link>
              </li>
              <li>
                <Link onClick={() => bell && bell.play()} activeClassName='active' to='/thesis' partiallyActive={true}>Thesis</Link>
              </li>
            </ul>

            <ul className='global-nav-list list-unstyled mt-4'>
              <li>
                <Link onClick={() => bell && bell.play()} activeClassName='active' to='/news' partiallyActive={true}>News</Link>
              </li>
              <li>
                <Link onClick={() => bell && bell.play()} activeClassName='active' to='/journal' partiallyActive={true}>Journal</Link>
              </li>
              <li>
                <Link onClick={() => bell && bell.play()} activeClassName='active' to='/about' partiallyActive={true}>About</Link>
              </li>
            </ul>

            <ul className='global-nav-list list-unstyled mt-4'>
              <li>
                <Link onClick={() => bell && bell.play()} activeClassName='active' to='/contact'>Contact</Link>
              </li>
            </ul>

            {/*
            <ul className='global-nav-list list-unstyled mt-4'>
              <li>
                <Link activeClassName='active' to='/products' partiallyActive={true}>Products</Link>
              </li>
              <li>
                <Link activeClassName='active' to='/forms'>Forms</Link>
              </li>
            </ul>
            */}
          </div>

          <div>
            <ul className='list-unstyled ml-3'>
              <li>
                <TheSwitch shutter={shutter} />
              </li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

const TheSwitch = ({ shutter }) => {
  const darkMode = useDarkMode(true)
  return (
    <Switch
      handleDiameter={26}
      uncheckedIcon={false}
      checkedIcon={false}
      height={16}
      width={42}
      onColor='#aaa'
      onHandleColor='#fff'
      offColor='#aaa'
      offHandleColor='#fff'
      boxShadow='0px 1px 5px rgba(0, 0, 0, 0.2)'
      activeBoxShadow='0px 0px 1px 5px rgba(0, 0, 0, 0.2)'
      id='toggle-theme'
      checked={darkMode.value}
      onChange={() => {
        shutter && shutter.play()
        darkMode.toggle()
      }}
      aria-label='Toggle dark mode'
    />
  )
}

export default Menu
