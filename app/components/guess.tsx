import { useKey } from 'react-use';
import { useState } from 'react';

export default function Guess() {
  const [word, setWord] = useState('');
  const keyFilter = (event: KeyboardEvent) => {
    return event.key === 'Backspace' || event.key === 'Enter' || (event.keyCode >= 65 && event.keyCode <= 90);
  };
  useKey(
    keyFilter,
    (key) => {
      if (key.key === 'Enter') return;
      if (key.key === 'Backspace') return setWord((word) => word.slice(0, -1));
      if (word.length >= 5) return;
      setWord((word) => word + key.key);
    },
    { event: 'keyup' }
  );

  return <h3>{word}</h3>;
}
