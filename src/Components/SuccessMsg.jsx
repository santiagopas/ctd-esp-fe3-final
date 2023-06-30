import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Messages.css'

const SuccessMsg = ({ user }) => {
  return (
    <main className='success-msg-container'>
      <h2>Gracias por contactarnos <strong>{user.name}</strong></h2>
      <p>Te responderemos a la brevedad a tu correo: <strong>{user.email}</strong></p>
      <Link to='/' className='hero-btn' >Volver al inicio</Link>
    </main>
  )
}

export default SuccessMsg