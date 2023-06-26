import { useContext } from "react";
import { ContextGlobal } from './Components/utils/global.context'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import '../src/index.css';
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
function App() {

  const { state } = useContext(ContextGlobal)

  return (
    <div className={state.theme + " App" }>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/user" element={<Detail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
