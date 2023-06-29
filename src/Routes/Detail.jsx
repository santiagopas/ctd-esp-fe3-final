import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card';
import '../assets/styles/Routes/Detail.css'

const Detail = () => {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [id, url, user]);

  if (loading) {
    return <main className='detail-container'>Cargando...</main>;
  }

  return (
    <main className='detail-container'>
      <h1>Datos de {user.name}</h1>
      <h3>Te proporcionamos la informacion necesaria para que te pongas en contacto con tu dentista de preferencia.</h3>
      <Card user={user} />
    </main>
  );
};

export default Detail;
