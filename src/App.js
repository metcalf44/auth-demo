import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import WordList from './components/WordList';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const [option, setOption] = useState();
  const { currentUser, logout, loginWithGoogle } = useAuth();

  console.log(currentUser);

  return (
    <>
      {!currentUser && !option && (
        <>
          <button type="button" onClick={() => setOption('login')}>
            Login
          </button>
          <button type="button" onClick={() => setOption('signup')}>
            Signup
          </button>
          <button type="button" onClick={loginWithGoogle}>
            Login With Google
          </button>
        </>
      )}
      {!currentUser && option && (
        <>{option === 'login' ? <Login /> : <Signup />}</>
      )}
      {currentUser && (
        <button type="button" onClick={logout}>
          Logout
        </button>
      )}
      <WordList />
    </>
  );
};

export default App;
