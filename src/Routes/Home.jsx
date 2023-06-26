import React, { useContext, useEffect, useState } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';


const Home = () => {

  const { state } = useContext(ContextGlobal)

  const users = state.data;

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map((user, index) => {
          // console.log(user);
          return (
            <Card
              key={user.id}
              user={user}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Home