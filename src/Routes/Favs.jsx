import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import "../assets/styles/components/Card.css";
import '../assets/styles/Routes/Favs.css'
const Favs = () => {
  const { state } = useContext(ContextGlobal);

  const favorites = state.favs;



  return (
    <>
      <main className="favs-container">
        <h1>Mis favoritos</h1>
        <div className="card-grid">
          {
            favorites.length === 0 ? <h2>Aún no tienes favoritos</h2> :
              favorites.map((user) => {
                return <Card key={user.id} user={user} />;
              })
          }
        </div>
      </main>
    </>
  );
};

export default Favs;
