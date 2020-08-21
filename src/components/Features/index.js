import './style.sass'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Card } from 'react-bootstrap'

import AnimateIn from './../AnimateIn'

import EmblaCarouselReact from 'embla-carousel-react'

import UIfx from 'uifx'
import bellAudio from './../../../static/audio/wav/04-Secondary-System-Sounds/navigation_transition-right.wav'

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

    let bell = typeof window !== 'undefined' && window.document ?
      new UIfx(
        bellAudio,
        {
          volume: 1.0, // number between 0.0 ~ 1.0
          throttleMs: 100
        }
      )
    : false

    this.embla.on('select', () => {
      bell && bell.play()

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
    let progress = Math.max(0, Math.min(1, this.embla.scrollProgress()))
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
          options={{loop: false, align: 'start'}}>
          <div className='d-flex'>
            <div className='feature'>
              <Card style={{background: '#47e2c9'}}>
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
              <Card style={{background: '#cee25c'}}>
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
              <Card style={{background: '#ff694d'}}>
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
        <Button className='mr-2' onClick={() => this.embla.scrollPrev()}>Prev</Button>
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
