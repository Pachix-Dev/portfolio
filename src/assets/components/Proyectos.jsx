import { Container, Nav } from 'react-bootstrap'
import { proyectos } from '../constantesProyectos.js'
import { ProyectoItem } from './ProyectoItem.jsx'
import { useState } from 'react'

export function Proyectos () {
  const [tag, setTag] = useState('all')
  return (
    <div id='proyectos' className='proyectos mt-5 mb-5 pt-5 pb-5 position-relative'>
      <Container>
        <h1>Proyectos.</h1>
        <Nav defaultActiveKey='/all' className='mx-auto text-center'>
          <Nav.Link eventKey='/all' href='#all' onClick={() => setTag('all')}>All</Nav.Link>
          <Nav.Link href='#websites' onClick={() => setTag('website')}>Websites</Nav.Link>
          <Nav.Link href='#landing-page' onClick={() => setTag('landing')}>Lading page</Nav.Link>
          <Nav.Link href='#ds' onClick={() => setTag('ds')}>Ds</Nav.Link>
        </Nav>

        <div className='proyectos-content'>
          {
            proyectos.map(proyecto => {
              if (tag === 'all') {
                const { id, title, media, urlwebsite, urlgithub, galeria, videos } = proyecto
                return (
                  <div key={id} xs={12} md={4} className='item'>
                    <ProyectoItem
                      title={title}
                      media={media}
                      urlwebsite={urlwebsite}
                      urlgithub={urlgithub}
                      galeria={galeria}
                      videos={videos}
                      tag={tag}
                    />
                  </div>
                )
              }
              if (tag === proyecto.tag) {
                const { id, title, media, urlwebsite, urlgithub, galeria, videos } = proyecto
                return (
                  <div key={id} xs={12} md={4} className='item'>
                    <ProyectoItem
                      title={title}
                      media={media}
                      urlwebsite={urlwebsite}
                      urlgithub={urlgithub}
                      galeria={galeria}
                      videos={videos}
                      tag={tag}
                    />
                  </div>
                )
              }
              return ''
            })
          }
        </div>
      </Container>
    </div>
  )
}
