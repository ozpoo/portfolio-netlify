import './style.sass'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VSensor from 'react-visibility-sensor'
// import { Spring } from 'react-spring/renderprops'

const AnimateIn = (props) => {
  return (
    <VisibilitySensor partialVisibility once={props.forever ? false : true} offset={{ bottom: 40 }}>
      {({ isVisible }) => (
        // <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
          <div className={props.className}>
            <div className={isVisible ? 'slideUp enter' : 'slideUp'}>
              {props.children}
            </div>
          </div>
        // </Spring>
      )}
    </VisibilitySensor>
  )
}

export default AnimateIn

class VisibilitySensor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
    }
  }

  render() {
    const { active } = this.state
    const { once, children, ...theRest } = this.props
    return (
      <VSensor
        active={active}
        onChange={(isVisible) =>
          once &&
          isVisible &&
          this.setState({ active: false })
        }
        {...theRest}>
        {({ isVisible }) => children({ isVisible })}
      </VSensor>
    )
  }
}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired,
}

VisibilitySensor.defaultProps = {
  once: false,
}
