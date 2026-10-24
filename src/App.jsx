
import { useState } from 'react'
import './App.css'

const estudiante = {
  nombre: 'Kevin Raúl Rodríguez Mendoza',
  codigo: '2231892000',
  curso: 'Cloud Computing y Arquitecturas digitales',
  fecha: '23 de octubre de 2026',
}

const habilidades = [
  'Cloud Computing',
  'Arquitecturas digitales',
  'React',
  'JavaScript',
  'HTML y CSS',
  'Git y GitHub',
]


function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <>
      <header className="navbar">
        <a className="logo" href="#inicio">
          KR<span>.</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir o cerrar menú"
          aria-expanded={menuAbierto}
          aria-controls="navegacion"
        >
          ☰
        </button>

        <nav
          id="navegacion"
          className={menuAbierto ? 'nav activo' : 'nav'}
        >
          <a href="#inicio" onClick={cerrarMenu}>Inicio</a>
          <a href="#sobre-mi" onClick={cerrarMenu}>Sobre mí</a>
          <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-contenido">
            <p className="etiqueta">PORTAFOLIO UNIVERSITARIO · 2026</p>
            <p className="saludo">Hola, bienvenido a mi portafolio</p>

            <h1>
              Kevin Raúl
              <span> Rodríguez Mendoza.</span>
            </h1>

            <h2>Estudiante universitario</h2>

            <p className="descripcion">
              Hago experiencias digitales modernas con uso de tecnologias actuales.
            </p>

            
<div className="botones">
  <a className="btn primario" href="#sobre-mi">
    Sobre mí ↗
  </a>

  <a className="btn secundario" href="#contacto">
    Contacto
  </a>
</div>


            <div className="datos">
              <div>
                <small>CÓDIGO UNIVERSITARIO</small>
                <strong>{estudiante.codigo}</strong>
              </div>
              <div>
                <small>CURSO</small>
                <strong>{estudiante.curso}</strong>
              </div>
              <div>
                <small>FECHA</small>
                <strong>{estudiante.fecha}</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="seccion">
          <p className="etiqueta">01 / PRESENTACIÓN</p>
          <h2>Sobre <span>mí</span></h2>
          <p className="texto-seccion">
            Mi nombre es {estudiante.nombre}. Este portafolio
            documenta mi proceso de aprendizaje en el curso
            de {estudiante.curso}, se manejar tecnologias como HTML, CSS, JAVASCRIPT, PYTHON y entre otras mas
          </p>

          <div className="panel">
            <h3>Mi objetivo académico</h3>
            <p>
              Fortalecer mis conocimientos sobre tecnologías
              digitales, infraestructura en la nube y desarrollo
              de soluciones tecnológicas, aplicándolos en
              actividades prácticas.
            </p>
          </div>
        </section>

        <section id="habilidades" className="seccion alterna">
          <p className="etiqueta">02 / CONOCIMIENTOS</p>
          <h2>Tecnologías y <span>herramientas</span></h2>
          <p className="texto-seccion">
            Áreas y tecnologías de referencia que forman parte
            de los temas de estudio de este portafolio.
          </p>

          <div className="habilidades">
            {habilidades.map((habilidad) => (
              <div className="habilidad" key={habilidad}>
                <span className="punto"></span>
                {habilidad}
              </div>
            ))}
          </div>
        </section>

      
        <section id="contacto" className="seccion contacto alterna">
          <p className="etiqueta">04 / CONTACTO</p>
          <h2>Gracias por visitar <span>mi portafolio digital.</span></h2>
          <p className="texto-seccion">
            Este sitio fue desarrollado como parte de mi
            formación académica en el curso de
            {' '}{estudiante.curso}.
          </p>
          <p className="texto-seccion">
            Estudiante: {estudiante.nombre}
          </p>
        </section>
      </main>

      <footer>
        <a href="#inicio" className="logo">
          KR<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {estudiante.nombre}
        </p>
        <p>Portafolio Digital</p>
      </footer>
    </>
  )
}

export default App
