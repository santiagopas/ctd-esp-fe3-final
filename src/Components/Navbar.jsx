import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import '../assets/styles/components/NavBar.css'

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const changeTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: newTheme, payload: newTheme });
  }

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favs">Favs</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>

        <input type="checkbox" id="toggle" onClick={changeTheme} />
        <label htmlFor='toggle' />
      </nav>
    </header>
  )
}

export default Navbar
