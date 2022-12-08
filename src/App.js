import { Form } from './components/Form.js';
import { useState } from 'react';

export function App() {
  const [user, setUser] = useState('');

  return (
    <div className='container'>
      {user && user ? 'USER LOGGED IN' : <Form setUser={setUser} />}
    </div>
  );
}
