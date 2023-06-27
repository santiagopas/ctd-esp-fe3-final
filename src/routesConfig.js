import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import NotFound from "./Routes/NotFound";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home
  },
  {
    path: "/favs",
    name: "Favoritos",
    component: Favs
  },
  {
    path: "/contact",
    name: "Contacto",
    component: Contact
  }
  ,
  {
    path: "/user/:id",
    component: Detail
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
