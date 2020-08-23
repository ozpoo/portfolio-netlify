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
  }

  componentDidMount() {
    const bell = typeof window !== 'undefined' && window.document ?
      new UIfx(bellAudio, { volume: 1.0, throttleMs: 100 }) : false

    this.embla.on('select', () => {
      bell && bell.play()
    })
  }

  render() {
    const { scrollProgress } = this.state
    const { gridItems } = this.props

    return (
      <AnimateIn className='global-features mb-5'>
        <EmblaCarouselReact
          emblaRef={c => (this.embla = c)}
          options={{loop: true, align: 'center', startIndex: 1}}>
          <div className='d-flex'>
            <div className='feature'>
              <Card style={{background: '#47e2c9'}}>
                <div className='content'>
                  <Card.Header as='h2'>Work</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card>
                <div className='content'>
                  <Card.Header as='h2'>Filler</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card style={{background: '#cee25c'}}>
                <div className='content'>
                  <Card.Header as='h2'>Studies</Card.Header>
                    <Card.Body>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                    </Card.Body>
                  <Card.Footer></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card>
                <div className='content'>
                  <Card.Header as='h2'>Filler</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card style={{background: '#ff694d'}}>
                <div className='content'>
                  <Card.Header as='h2'>News</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card>
                <div className='content'>
                  <Card.Header as='h2'>Filler</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card style={{background: '#ecb23d'}}>
                <div className='content'>
                  <Card.Header as='h2'>Journal</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card>
                <div className='content'>
                  <Card.Header as='h2'>Filler</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </div>
              </Card>
            </div>
          </div>
        </EmblaCarouselReact>
        <Button className='prev' onClick={() => this.embla.scrollPrev()}>
          <svg>
            <line x1='0' y1='50%' x2='100%' y2='50%' />
            <line x1='50%' y1='0' x2='50%' y2='100%' />
          </svg>
        </Button>
        <Button className='next' onClick={() => this.embla.scrollNext()}>
          <svg>
            <line x1='0' y1='50%' x2='100%' y2='50%' />
            <line x1='50%' y1='0' x2='50%' y2='100%' />
          </svg>
        </Button>
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
