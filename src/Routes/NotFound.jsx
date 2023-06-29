import '../assets/styles/Routes/NotFound.css'
import notFoundImg from '../assets/images/404.jpg'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <main className='not-found-container' style={{ backgroundImage: `url(${notFoundImg})` }}>
      <div className='not-found-content'>
        <h1>Oops!</h1>
        <h2>La pagina que buscas no existe o no esta disponible</h2>
        <Link to='/' className='hero-btn'>Volver al inicio</Link>
      </div>
    </main>
  )
}

export default NotFound