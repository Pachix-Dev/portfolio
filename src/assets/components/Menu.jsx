
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import logofabian from '../img/logo_transparent.png'
export function Menu () {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const background = useTransform(
    scrollYProgress,
    [0, 0.10],
    ['#ffffff00', 'rgba(3, 49, 77, 0.8)']
  )
  const backdropFilter = useTransform(
    scrollYProgress,
    [0, 0.10],
    ['blur(0)', 'blur(10px)']
  )
  return (
    <>
      <Navbar as={motion.nav} className='menu' expand='sm' sticky='top' style={{ backdropFilter, background }}>
        <Container>
          <Navbar.Brand href='#'><img width={85} src={logofabian} alt='fabian yapura claros' /></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto text-center'>
              <Nav.Link href='#inicio'>Inicio</Nav.Link>
              <Nav.Link href='#sobre-mi'>Sobre mi</Nav.Link>
              <Nav.Link href='#experiencia'>Experiencia</Nav.Link>
              <Nav.Link href='#proyectos'>Proyectos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <motion.div className='progress-bar-portfolio' style={{ scaleX }} />
      </Navbar>
    </>
  )
}
