import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>Desarrollado por &copy; Santiago Pasciullo 
        <span> {new Date().getFullYear()} </span>
      </p>
    </footer>
  )
}

export default Footer
