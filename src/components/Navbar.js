import React from 'react'

import { Link } from 'gatsby'

import Switch from 'react-switch'
import Logo from './Logo'

import useDarkMode from './use-dark-mode'

const MainNav = () => {
  const darkMode = useDarkMode(false)

  return (
    <>
      <div className='global-nav px-3 py-3 d-flex flex-sm-column justify-content-between'>
        <div>
          <Link to='/'>
            <Logo />
          </Link>

          <ul className='global-nav-list list-unstyled pt-5'>
            <li>
              <Link activeClassName='active' to='/'>Index</Link>
            </li>
          </ul>

          <ul className='global-nav-list list-unstyled mt-4'>
            <li>
              <Link activeClassName='active' to='/work' partiallyActive={true}>Work</Link>
            </li>
            <li>
              <Link activeClassName='active' to='/studies' partiallyActive={true}>Studies</Link>
            </li>
            <li>
              <Link activeClassName='active' to='/news' partiallyActive={true}>News</Link>
            </li>
            <li>
              <Link activeClassName='active' to='/journal' partiallyActive={true}>Journal</Link>
            </li>
          </ul>

          <ul className='global-nav-list list-unstyled mt-4'>
            <li>
              <Link activeClassName='active' to='/about' partiallyActive={true}>About</Link>
            </li>
            <li>
              <Link activeClassName='active' to='/contact'>Contact</Link>
            </li>
          </ul>

          <ul className='global-nav-list list-unstyled mt-4'>
            <li>
              <Link activeClassName='active' to='/products' partiallyActive={true}>Products</Link>
            </li>
            <li>
              <Link activeClassName='active' to='/forms'>Forms</Link>
            </li>
          </ul>
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
            onChange={darkMode.toggle}
            aria-label='Toggle dark mode'
          />
        </div>
      </div>
    </>
  )
}

export default MainNav
