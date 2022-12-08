import { useState } from 'react';
import { createUser, login, logout, auth } from '../config/firebase.js';
import { onAuthStateChanged, getIdToken } from 'firebase/auth';
import { Button } from './button.js';

export function Form({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function clearForm() {
    setEmail('');
    setPassword('');
  }

  // onAuthStateChanged(auth, async (user) => {
  //   if (user) {
  //     console.log(user);
  //     setUser(user);
  //     const token = await getIdToken(user);
  //     console.log(token);
  //     const response = fetch('/auth', {
  //       method: 'GET',
  //       headers: {
  //         Authorization: token,
  //       },
  //     });
  //     let text = (await response).text();
  //     console.log('response ' + text);
  //   } else {
  //     console.log('user not logged in');
  //   }
  // });

  function handleClick(e, text) {
    e.preventDefault();

    if (text === 'Login') {
      console.log(`Email: ${email} Password: ${password}`);
      login(email, password);
      clearForm();
      return;
    }

    if (text === 'Create Account') {
      console.log('Create Account Clicked!');
      createUser(email, password);
      clearForm();
      return;
    }

    if (text === 'Log out') {
      console.log('Log Out Successful');
      logout();
      return;
    }
  }
  return (
    <form style={{ maxWidth: '33%' }}>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='name@example.com'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button color={'success'} text={'Login'} handleClick={handleClick} />
      <Button
        color={'primary'}
        text={'Create Account'}
        handleClick={handleClick}
      />
      <Button color={'danger'} text={'Log out'} handleClick={handleClick} />
    </form>
  );
}
