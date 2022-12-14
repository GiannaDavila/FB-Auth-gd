import { useState } from 'react'
import Protected from './scenes/Protected';
import Login from './scenes/Login';


function App() {
  const [user, setUser] = useState()
  return (
    <>
      {!user
        ? <Login setUser={setUser} />
        : <Protected />
      }
    </>
  );
}

export default App;
