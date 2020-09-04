import './style.sass'

import React, { Component } from 'react'

import { Link } from 'gatsby'

import { Button, Card } from 'react-bootstrap'

import AnimateIn from './../AnimateIn'

import PreviewCompatibleImage from './../PreviewCompatibleImage'
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

    return (
      <AnimateIn className='global-features mb-5'>
        <EmblaCarouselReact
          emblaRef={c => (this.embla = c)}
          options={{loop: true, align: 'center', startIndex: 1}}>
          <div className='d-flex'>
            <div className='feature'>
              <Card style={{background: '#47e2c9'}}>
                <div className='content'>
                  <Card.Header as='h3'>Work</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button as={Link} to={'/'}>
                      Discover &rarr;
                    </Button>
                  </Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card>
                <div className='content'>
                  <Card.Header as='h3'>Filler</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer>
                    <div>
                      <Button as={Link} to={'/'}>
                        Discover &rarr;
                      </Button>
                    </div>
                    <div>
                      <div className='image-avatar-lg'>
                        <PreviewCompatibleImage
                          imageInfo={{
                            type: 'url',
                            image: '/img/headshot.jpg',
                            alt: 'Eric Oz Andren',
                          }} />
                      </div>
                    </div>
                  </Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card style={{background: '#cee25c'}}>
                <div className='content'>
                  <Card.Header as='h3'>Studies</Card.Header>
                    <Card.Body>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button as={Link} to={'/'}>
                        Discover &rarr;
                      </Button>
                    </Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card>
                <div className='content'>
                  <Card.Header as='h3'>Filler</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer>
                    <div>
                      <Button as={Link} to={'/'}>
                        Discover &rarr;
                      </Button>
                    </div>
                    <div>
                      <div className='image-avatar-lg'>
                        <PreviewCompatibleImage
                          imageInfo={{
                            type: 'url',
                            image: '/img/headshot.jpg',
                            alt: 'Eric Oz Andren',
                          }} />
                      </div>
                    </div>
                  </Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card style={{background: '#ff694d'}}>
                <div className='content'>
                  <Card.Header as='h3'>News</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button as={Link} to={'/'}>
                      Discover &rarr;
                    </Button>
                  </Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card>
                <div className='content'>
                  <Card.Header as='h3'>Filler</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer>
                    <div>
                      <Button as={Link} to={'/'}>
                        Discover &rarr;
                      </Button>
                    </div>
                    <div>
                      <div className='image-avatar-lg'>
                        <PreviewCompatibleImage
                          imageInfo={{
                            type: 'url',
                            image: '/img/headshot.jpg',
                            alt: 'Eric Oz Andren',
                          }} />
                      </div>
                    </div>
                  </Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card style={{background: '#ecb23d'}}>
                <div className='content'>
                  <Card.Header as='h3'>Journal</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button as={Link} to={'/'}>
                      Discover &rarr;
                    </Button>
                  </Card.Footer>
                </div>
              </Card>
            </div>

            <div className='feature'>
              <Card>
                <div className='content'>
                  <Card.Header as='h3'>Filler</Card.Header>
                  <Card.Body>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum libero pharetra a mollis vitae augue.</p>
                  </Card.Body>
                  <Card.Footer>
                    <div>
                      <Button as={Link} to={'/'}>
                        Discover &rarr;
                      </Button>
                    </div>
                    <div>
                      <div className='image-avatar-lg'>
                        <PreviewCompatibleImage
                          imageInfo={{
                            type: 'url',
                            image: '/img/headshot.jpg',
                            alt: 'Eric Oz Andren',
                          }} />
                      </div>
                    </div>
                  </Card.Footer>
                </div>
              </Card>
            </div>
          </div>
        </EmblaCarouselReact>
        <Button className='prev' onClick={() => this.embla.scrollPrev()}>
          <svg viewBox='0 0 5 10'>
            <polyline points='5 0, 0 5, 5 10' />
          </svg>
        </Button>
        <Button className='next' onClick={() => this.embla.scrollNext()}>
        <svg viewBox='0 0 5 10'>
          <polyline points='0 0, 5 5, 0 10' />
        </svg>
        </Button>
        <div className='embla__progress'>
          <div className='embla__progress__bar' style={{ transform: `translateX(${scrollProgress}%)`}} />
        </div>
      </AnimateIn>
    )
  }
}

export default FeatureGrid
