import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card';

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
  }, [ url]);


  if (!user) {
    return <div>Loading...</div>;
  } 


  return (
    <>
      <h1>Detail Dentist id:  {id} </h1>
    <Card user={user}/>
     
  
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}

      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail