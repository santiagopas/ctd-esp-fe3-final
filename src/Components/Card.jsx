import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import "../assets/styles/components/Card.css";
import { MdOutlineStarBorderPurple500, MdOutlineStarPurple500 } from "react-icons/md";

const Card = ({ user }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    console.log('Agregando a favoritos');
    dispatch({ type: 'addFav', payload: user });
  }

  const removeFav = () => {
    console.log('Removiendo de favoritos');
    dispatch({ type: 'removeFav', payload: user });
  }

  const currentUser = state.data.find(userData => userData.id === user.id);
  const userPhoto = currentUser ? currentUser.photo : '';
  const isFav = state.favs.find(fav => fav.id === user.id);

  return (
    <article className="card-container">
      <Link to={`/user/${user.id}`}>
        <figure>
          <div className="userImg" style={{ backgroundImage: `url(${userPhoto})` }}></div>
          <figcaption>
            <h3>{user.name}</h3>
          </figcaption>
          <p>{user.username}</p>
        </figure>
      </Link>
      <div className="favIcon">
        {isFav ? (
          <MdOutlineStarPurple500 onClick={removeFav} className="favIcon" />
        ) : (
          <MdOutlineStarBorderPurple500 onClick={addFav} className="favIcon" />
        )}
      </div>
    </article>
  );
};

export default Card;
