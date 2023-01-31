import axios from 'axios';
import { useState } from 'react';
import { User } from '../../types';

export const App = () => {
  const [userID, setUserID] = useState<string>('');
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
  });

  const getAUser = async () => {
    const response = await axios.get('http://localhost:3000/users', {
      params: {
        id: userID,
      },
    });
    setUser(response.data);
  };

  return (
    <>
      <div>
        <p>{`The user's ID is ${user.id}`}</p>
        <p>{`The user's name is ${user.name}`}</p>
      </div>
      <div>
        <input onChange={e => setUserID(e.target.value)} value={userID}></input>
        <button onClick={() => getAUser()}>GET</button>
      </div>
    </>
  );
};
