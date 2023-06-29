import { Link } from 'react-router-dom';
import { useContext, useMemo, useEffect } from 'react';
import { ContextGlobal } from './utils/global.context';
import '../assets/styles/components/NavBar.css';
import routes from '../routesConfig';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state;

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch({ type: newTheme, payload: newTheme });
  };

  const limitedRoutes = useMemo(() => routes.slice(0, 3), []);

  return (
    <header>
      <nav>
        <Link className="logo" to='/'>
          <img src={Logo} alt="logo" />
        </Link>
        <ul>
          {limitedRoutes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>

        <input type="checkbox" id="toggle" onClick={changeTheme} checked={theme === 'dark'} />
        <label htmlFor="toggle" className='color-theme noche' />
      </nav>
    </header>
  );
};

export default Navbar;
