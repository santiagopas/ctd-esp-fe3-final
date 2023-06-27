import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import '../assets/styles/components/NavBar.css'
import routes from '../routesConfig'
const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const changeTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: newTheme, payload: newTheme });
  }
  const limitedRoutes = routes.slice(0, 3);
  return (
    <header>
      <nav>
        <ul>
          {limitedRoutes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}

        </ul>

        <input type="checkbox" id="toggle" onClick={changeTheme} />
        <label htmlFor='toggle' />
      </nav>
    </header>
  )
}

export default Navbar
