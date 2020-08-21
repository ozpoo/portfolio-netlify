import React from 'react'

import { Link } from 'gatsby'

import Switch from 'react-switch'
import Logo from './Logo'

import { Container } from 'react-bootstrap'

import useDarkMode from './use-dark-mode'

import UIfx from 'uifx'
import bellAudio from './../../static/audio/wav/03-Primary-System-Sounds/navigation_hover-tap.wav'
import shutterAudio from './../../static/audio/wav/03-Primary-System-Sounds/ui_camera-shutter.wav'

const MainNav = () => {
  const darkMode = useDarkMode(true)

  let bell = () => {}
  let shutter = () => {}

  if (!typeof window === "undefined" && window.document) {
    bell = new UIfx(
      bellAudio,
      {
        volume: 1.0, // number between 0.0 ~ 1.0
        throttleMs: 100
      }
    )

    shutter = new UIfx(
      shutterAudio,
      {
        volume: 1.0, // number between 0.0 ~ 1.0
        throttleMs: 0
      }
    )
  }

  return (
    <div className='global-nav'>
      <Container className='px-3 py-3 d-flex flex-md-column justify-content-between h-100'>
        <div>
          <Link onClick={() => bell.play()} to='/'>
            <Logo />
          </Link>

          <ul className='global-nav-list list-unstyled pt-5'>
            <li>
              <Link onClick={() => bell.play()} activeClassName='active' to='/'>Index</Link>
            </li>
          </ul>

          <ul className='global-nav-list list-unstyled mt-4'>
            <li>
              <Link onClick={() => bell.play()} activeClassName='active' to='/work' partiallyActive={true}>Work</Link>
            </li>
            <li>
              <Link onClick={() => bell.play()} activeClassName='active' to='/studies' partiallyActive={true}>Studies</Link>
            </li>
            <li>
              <Link onClick={() => bell.play()} activeClassName='active' to='/news' partiallyActive={true}>News</Link>
            </li>
            <li>
              <Link onClick={() => bell.play()} activeClassName='active' to='/journal' partiallyActive={true}>Journal</Link>
            </li>
          </ul>

          <ul className='global-nav-list list-unstyled mt-4'>
            <li>
              <Link onClick={() => bell.play()} activeClassName='active' to='/about' partiallyActive={true}>About</Link>
            </li>
            <li>
              <Link onClick={() => bell.play()} activeClassName='active' to='/contact'>Contact</Link>
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
              shutter.play()
              darkMode.toggle()
            }}
            aria-label='Toggle dark mode'
          />
        </div>
      </Container>
    </div>
  )
}

export default MainNav
