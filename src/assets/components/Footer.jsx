import { Col, Container, Row } from 'react-bootstrap'
import logofabian from '../img/logo_transparent.png'
export function Footer () {
  return (
    <footer className='pt-5 pb-5'>
      <Container>
        <Row>
          <Col md={7}>
            <h1>¡Vamos hacer algo increíble juntos!</h1>
            <h1>Comienza por <a href='mailto:hola@yapura.com.mx'><u>decir Hola</u></a></h1>
          </Col>
          <Col md={5}>
            <p>Información</p>
            <span>Léon, Guanjuato México</span>
            <h4>hola@yapura.com.mx</h4>
            <ul className='mt-5 mb-5'>
              <li><a href='#Inicio'> Inicio </a></li>
              <li><a href='#sobre-mi'>Sobre mi</a></li>
              <li><a href='#experiencia'>Experiencia</a></li>
              <li><a href='#proyectos'>Proyectos</a></li>
            </ul>
          </Col>
        </Row>
        <Row className='footer-bottom'>
          <Col md={7}>
            <img src={logofabian} width={150} alt='logo-fabian-yapura' />
          </Col>
          <Col md={5} className='mt-auto'>
            <div className='social-icons-footer'>
              <a href='https://www.facebook.com/pachi.claros/' rel='noreferrer' target='_blank' aria-label='my facebook profile'>
                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 320 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' /></svg>
              </a>
              <a href='https://www.linkedin.com/in/fabian-yapura-claros-132537227/' rel='noreferrer' target='_blank' aria-label='my linkedin profile'>
                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 448 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z' /></svg>
              </a>
              <a href='https://www.instagram.com/fabian.y.c/' rel='noreferrer' target='_blank' aria-label='my instagram profile'>
                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 448 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' /></svg>
              </a>
              <a href='https://github.com/Pachix-Dev' rel='noreferrer' target='_blank' aria-label='my github profile'>
                <svg stroke='currentColor' fill='currentColor' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><title>GitHub</title><path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' /></svg>
              </a>
              <a href='https://wa.me/+5214775690282?text=¡Hola!' rel='noreferrer' target='_blank' aria-label='send me a message'>
                <svg stroke='currentColor' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' height='1em' width='1em'><title>WhatsApp</title><path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' /></svg>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
