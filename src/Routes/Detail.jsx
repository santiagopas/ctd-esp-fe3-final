import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card';

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
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Detail Dentist id: {id}</h1>
      <Card user={user} />
      <div>
        <h2>Name: {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    </>
  );
};

export default Detail;
