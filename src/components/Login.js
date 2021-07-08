import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from '../hooks/useForm';

const Login = () => {
  const [{ email, password }, updateValues, resetValues] = useForm({
    email: '',
    password: '',
  });
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      login(email, password);
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
