import React, { useContext} from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';
import '../assets/styles/Routes/Home.css'

const Home = () => {

  const { state } = useContext(ContextGlobal)

  const users = state.data;

  return (
    <main className='main-container'>' 
          <h1>Clinica dental muelita</h1>
      <section className='hero'>
      <h2></h2>
      </section>
      <section className='card-grid'>
        {users.map((user) => {
          return (
            <Card key={user.id} user={user}/>
          )
        })}
      </section>
    </main>
  )
}

export default Home