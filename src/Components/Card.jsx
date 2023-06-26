import React from "react";
import { Link } from "react-router-dom";


const Card = ({ user, userImage }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    console.log('Agregando a favoritos');
    const favs = JSON.parse(localStorage.getItem('favs')) || []
    const exist = favs.find(fav => fav.id === user.id)
    if (!exist) {
      favs.push(user)
      localStorage.setItem('favs', JSON.stringify(favs))
    } else {
      console.log('Ya existe en favoritos');
    }
  }



  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <h3>name:{user.name}</h3>
      <p>username:{user.username}</p>
      <p>id: {user.id}</p>
      <img src={userImage} alt={user.name} width={200} />
      <p>phone:{user.phone}</p>
      <p>email:{user.email}</p>
      <p>website:{user.website}</p>
      <Link to={`/user/${user.id}`}>
        <button onClick={addFav} className="favButton">Agregar a favoritos</button>
      </Link>
    </div>
  );
};

export default Card;
