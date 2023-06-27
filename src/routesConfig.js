import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/favs",
    component: Favs
  },
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
