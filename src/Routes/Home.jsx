import React, { useContext} from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';


const Home = () => {

  const { state } = useContext(ContextGlobal)

  const users = state.data;

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map((user) => {
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