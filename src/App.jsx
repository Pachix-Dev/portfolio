
import './App.css'
import { Biografia } from './assets/components/Biofrafia'
import { Inicio } from './assets/components/Inicio'
import { Menu } from './assets/components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Experiencia } from './assets/components/Experiencia'
import { Footer } from './assets/components/Footer'
import { Proyectos } from './assets/components/Proyectos'

function App () {
  return (
    <>
      <Menu />
      <Inicio />
      <Biografia />
      <Experiencia />
      <Proyectos />
      <Footer />
    </>
  )
}

export default App
