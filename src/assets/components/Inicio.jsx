import { Container } from 'react-bootstrap'
import { PlaceholderCodeRight } from './PlaceholderCodeRight'
import { PlaceholderCodeLeft } from './PlaceholderCodeLeft'

export function Inicio () {
  return (

    <div id='inicio' className='inicio-wrapper d-flex align-items-center justify-content-center'>
      <Container>
        <div className='inicio-text-intro p-3 text-light'>
          <h1>Fabian Yapura Claros</h1>
          <p>Web Developer <span>+7 Años de experiencia</span></p>
        </div>

      </Container>
      <PlaceholderCodeRight initialY={0} progressY={0.10} />
      <PlaceholderCodeLeft initialY={0} progressY={0.10} />
    </div>

  )
}
