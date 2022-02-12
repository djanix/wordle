import { useKey } from 'react-use';
import { useState } from 'react';

type Words = [string, string, string, string, string];

export default function GuessList() {
  const [words, setWords] = useState<Words>(['', '', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);

  const keyFilter = (event: KeyboardEvent) => {
    return event.key === 'Backspace' || event.key === 'Enter' || (event.keyCode >= 65 && event.keyCode <= 90);
  };

  const keyFunction = ({ key }: KeyboardEvent) => {
    if (currentIndex >= words.length) return;

    if (key === 'Enter') {
      if (currentIndex >= words.length) return;
      if (words[currentIndex].length < 5) return;
      return setCurrentIndex((currentIndex) => currentIndex + 1);
    }

    if (key === 'Backspace') {
      const wordsCopy: Words = [...words];
      wordsCopy[currentIndex] = wordsCopy[currentIndex].slice(0, -1);
      return setWords(wordsCopy);
    }

    if (words[currentIndex].length >= 5) return;

    const wordsCopy: Words = [...words];
    wordsCopy[currentIndex] = wordsCopy[currentIndex] + key;
    setWords(wordsCopy);
  };

  useKey(keyFilter, keyFunction, { event: 'keyup' });

  return (
    <ul>
      {words.map((word, index) => (
        <li key={index}>
          {word}
          {currentIndex > index ? '*' : ''}
        </li>
      ))}
    </ul>
  );
}
