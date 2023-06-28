import React from "react";
import Card from "../Components/Card";

import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import "../assets/styles/components/Card.css";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  const favorites = state.favs;

    

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favorites.map((user) => {
          return (
            <Card key={user.id} user={user} />
          );
        })}
      </div>
    </>
  );
};

export default Favs;
