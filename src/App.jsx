import { useContext } from "react";
import { ContextGlobal } from './Components/utils/global.context'
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import routes from "./routesConfig";
import '../src/index.css';
function App() {

  const { state } = useContext(ContextGlobal)

  return (
    <div className={state.theme + " App"}>

      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
