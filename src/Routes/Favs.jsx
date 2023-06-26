import React from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";


const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favs = JSON.parse(localStorage.getItem("favs")) || [];
  console.log(favs);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favs.map((fav) => {
          return (
            <Link to={`/user/${fav.id}`} key={fav.id}>
              <Card user={fav} userImage={
                `https://picsum.photos/id/${fav.id}/200/300`
              }/>
            </Link>
          );
        })}

        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
