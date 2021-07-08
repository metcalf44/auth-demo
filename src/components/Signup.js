import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from '../hooks/useForm';

const Signup = () => {
  const [{ email, password, confirmPassword }, updateValues, resetValues] =
    useForm({
      email: '',
      password: '',
      confirmPassword: '',
    });
  const { signup } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password === confirmPassword) {
      signup(email, password);
      resetValues();
    } else {
      console.log('handle error properly');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={updateValues}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={updateValues}
      />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={updateValues}
      />
      <button type="submit">SignUp</button>
    </form>
  );
};

export default Signup;
