import './style.sass'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Accordion, Card, Row, Col } from 'react-bootstrap'

import PreviewCompatibleImage from './../PreviewCompatibleImage'
import AnimateIn from './../AnimateIn'

import Tilt from 'react-tilt'

import EmblaCarouselReact from 'embla-carousel-react'

class FeatureGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.currentIndex = 0
    this.goBackwards = false
    this.goBig = false
  }

  componentDidMount() {
    this.setProgress()

    this.embla.on('select', () => {
      this.goBackwards = false
      this.goBig = false

      if(this.currentIndex === (this.embla.slideNodes().length - 1) && this.embla.selectedScrollSnap() === 0) this.goBackwards = true
      if(this.currentIndex === 0 && this.embla.selectedScrollSnap() === (this.embla.slideNodes().length - 1)) this.goBig = true

      this.currentIndex = this.embla.selectedScrollSnap()
    })
    this.embla.on('scroll', () => {
      this.setProgress()
    })
    this.embla.on('settle', () => {
      this.goBackwards = false
      this.goBig = false
      this.setProgress()
    })
  }

  setProgress = (settled) => {
    const length = this.embla.slideNodes().length
    let adder = (100 / length) / 100

    let progress = Math.max(0, Math.min(1, this.embla.scrollProgress()))

    // if(progress === 0 || progress === (1 - adder)) {
    //   this.goBackwards = false
    //   this.goBig = false
    // }
    //
    // if(this.goBackwards) {
    //   const totalProgress = 1 - adder - adder
    //   progress = Math.abs(1 - progress)
    //   const anotherAdder = totalProgress * (progress / adder)
    //   progress = progress + anotherAdder
    // }
    //
    // if(this.goBig) {
    //   const totalProgress = 1 - adder - adder
    //   progress = Math.abs(progress - 1)
    //   const anotherAdder = totalProgress * (progress / adder)
    //   progress = progress + anotherAdder
    // }
    //
    // this.setState({scrollProgress: (progress + adder) * 100})

    this.setState({scrollProgress: progress * 100})
  }

  render() {
    const { scrollProgress } = this.state
    const { gridItems } = this.props
    return (
      <AnimateIn className='global-features pb-5'>
        <EmblaCarouselReact
          className='pb-4'
          emblaRef={c => (this.embla = c)}
          options={{loop: false}}>
          <div className='d-flex'>
            <div className='feature'>
              <Card style={{background: '#5bc7c7'}}>
                <div className='content'>
                  <Card.Header as='h2'>Work</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Card.Body>
                  <Card.Footer><Button>More</Button></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card style={{background: '#f08a61'}}>
                <div className='content'>
                  <Card.Header as='h2'>Studies</Card.Header>
                    <Card.Body>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Card.Body>
                  <Card.Footer><Button>More</Button></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card style={{background: '#cee25c'}}>
                <div className='content'>
                  <Card.Header as='h2'>News</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Card.Body>
                  <Card.Footer><Button>More</Button></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card style={{background: '#ecb23d'}}>
                <div className='content'>
                  <Card.Header as='h2'>Journal</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Card.Body>
                  <Card.Footer><Button>More</Button></Card.Footer>
                </div>
              </Card>
            </div>
          </div>
        </EmblaCarouselReact>
        <Button onClick={() => this.embla.scrollPrev()}>Prev</Button>
        <Button onClick={() => this.embla.scrollNext()}>Next</Button>
        <div className='embla__progress'>
          <div className='embla__progress__bar' style={{ transform: `translateX(${scrollProgress}%)`}} />
        </div>
      </AnimateIn>
    )
  }
}

/*<Row>
  {gridItems.map((item) => (
    <Col xs={6} lg={4} xl={3} key={item.text}>
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
          <Card>
            <Card.Header className='text-monospace'><small>{item.title}</small></Card.Header>
            <PreviewCompatibleImage imageInfo={item}/>
            <Card.Body>
              {item.text}
            </Card.Body>
            <Accordion>
              {item.list.map((item, index) => (
                <Card key={item.title} className={index}>
                  <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                    {item.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>{item.description}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Card>
        </Tilt>
      </AnimateIn>
    </Col>
  ))}
</Row>*/

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
