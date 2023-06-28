import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';
import '../assets/styles/Routes/Home.css'

const Home = () => {

  const { state } = useContext(ContextGlobal)

  const users = state.data;

  return (
    <main className='main-container'>
      <section class="hero">
        <div class="hero-content">
          <div class="hero-text">
            <h1 className='animated-text'>Clinica Muelita</h1>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat aspernatur </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          {/* <div class="hero-image">
            <figure>
             <img src=" " alt="" width={300} />
            </figure>
          </div> */}
        </div>
      </section>
      <section className='card-grid'>
        {users.map((user) => {
          return (
            <Card key={user.id} user={user} />
          )
        })}
      </section>
    </main>
  )
}

export default Home