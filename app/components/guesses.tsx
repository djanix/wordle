import { useKey } from 'react-use';
import { useState } from 'react';
import Guess from '~/components/guess';

type Words = [string, string, string, string, string];

type Props = {
  word: string;
};

export default function Guesses({ word }: Props) {
  const [guesses, setGuesses] = useState<Words>(['', '', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);

  const keyFilter = (event: KeyboardEvent) => {
    return event.key === 'Backspace' || event.key === 'Enter' || (event.keyCode >= 65 && event.keyCode <= 90);
  };

  const keyFunction = ({ key }: KeyboardEvent) => {
    if (currentIndex >= guesses.length) return;

    if (key === 'Enter') {
      if (currentIndex >= guesses.length) return;
      if (guesses[currentIndex].length < 5) return;
      return setCurrentIndex((currentIndex) => currentIndex + 1);
    }

    if (key === 'Backspace') {
      const guessesCopy: Words = [...guesses];
      guessesCopy[currentIndex] = guessesCopy[currentIndex].slice(0, -1);
      return setGuesses(guessesCopy);
    }

    if (guesses[currentIndex].length >= 5) return;

    const guessesCopy: Words = [...guesses];
    guessesCopy[currentIndex] = guessesCopy[currentIndex] + key;
    setGuesses(guessesCopy);
  };

  useKey(keyFilter, keyFunction, { event: 'keyup' });

  return (
    <ul>
      {guesses.map((guess, index) => (
        <li key={index}>
          <Guess word={word} guess={guess} isPlayed={currentIndex > index} />
        </li>
      ))}
    </ul>
  );
}
