import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const { id } = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [user, setUser] = useState();

  // Para esto deberan usar el id que viene en el parametro dinamico de la URL
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);


  if (!user) {
    return <div>Loading...</div>;
  } else { console.log(user) }


  return (
    <>
      <h1>Detail Dentist id:  {id}
      </h1>
      <div>
        <h3>name:{user.name}
        </h3>
        <p>surName:</p>
        <p>id: </p>
        <img src="" alt="" width={200} />
        <p>phone:</p>
        <p>email:</p>
        <p>website:</p>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}

      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail