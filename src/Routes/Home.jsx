import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';
import '../assets/styles/Routes/Home.css'
import heroImg from '../assets/images/portada.png'
const Home = () => {

  const { state } = useContext(ContextGlobal)

  const users = state.data;

  const dentistas = () => {
    const dentistsSection = document.getElementById('dentistas');
    dentistsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='main-container'>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Clínica OdontoPlus</h1>
            <h2>Tu sonrisa en buenas manos</h2>
            <p>Expertos en cuidado dental. Un equipo altamente calificado y comprometido para ofrecerte un enfoque integral y personalizado.</p>
            <a className='hero-btn' onClick={dentistas}>Nuestro equipo</a>
          </div>
          <div className="hero-image">
            <figure>
              <img src={heroImg} alt="" width={300} />
            </figure>
          </div>
        </div>
      </section>
      <section id='dentistas'>
        <h2>Nuestro equipo</h2>
        <div className='card-grid'>
          {users.map((user) => {
            return (
              <Card key={user.id} user={user} />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Home