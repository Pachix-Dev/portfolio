import { Container } from 'react-bootstrap'
import { PlaceholderCodeRight } from './PlaceholderCodeRight'
import { PlaceholderCodeLeft } from './PlaceholderCodeLeft'

export function Inicio () {
  return (

    <div id='inicio' className='inicio-wrapper d-flex align-items-center justify-content-center'>
      <Container>
        <div className='inicio-text-intro p-5 text-light'>
          <h4>Hola, soy</h4>
          <h1>Fabian Yapura<br /> Claros</h1>
          <p>Web Developer </p>
        </div>
        <div className='inicio-exp d-flex justify-content-center align-items-center text-light'>
          <h1>7</h1>
          <span>Años de experiencia</span>
        </div>
      </Container>
      <PlaceholderCodeRight initialY={0} progressY={0.10} />
      <PlaceholderCodeLeft initialY={0} progressY={0.10} />
    </div>

  )
}
