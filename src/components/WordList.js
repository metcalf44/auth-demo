import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const WordList = () => {
  const [words, setWords] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      fetch(`http://localhost:3000/words?uid=${currentUser.uid}`)
        .then((response) => response.json())
        .then((response) => setWords(response));
    }
  }, [currentUser]);

  return (
    <div>
      <h1>List of Words</h1>
      {currentUser && words.map(({ id, word }) => <p key={id}>{word}</p>)}
    </div>
  );
};

export default WordList;
