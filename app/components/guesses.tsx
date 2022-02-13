import { useState } from 'react';
import { useKey } from 'react-use';
import Guess from '~/components/guess';
import { useRecoilState } from 'recoil';
import { gameStatsLossState, gameStatsStreakState, gameStatsWinState } from '~/store';

type Words = [string, string, string, string, string];

type Props = {
  word: string;
};

export default function Guesses({ word }: Props) {
  const [guesses, setGuesses] = useState<Words>(['', '', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setGameStatsLoss] = useRecoilState(gameStatsLossState);
  const [, setGameStatsWin] = useRecoilState(gameStatsWinState);
  const [, setGameStatsStreak] = useRecoilState(gameStatsStreakState);

  const keyFilter = (event: KeyboardEvent) => {
    const letters = /^[A-Za-z]+$/;
    return event.key === 'Backspace' || event.key === 'Enter' || !!event.key.match(letters);
  };

  const keyFunction = ({ key }: KeyboardEvent) => {
    if (currentIndex >= guesses.length) return;

    if (key === 'Enter') {
      if (currentIndex >= guesses.length) return;
      if (guesses[currentIndex].length < 5) return;

      if (guesses[currentIndex] === word) {
        setGameStatsWin((val) => val + 1);
        setGameStatsStreak((val) => val + 1);
        return;
      }

      if (currentIndex === guesses.length - 1) {
        setGameStatsLoss((val) => val + 1);
        setGameStatsStreak(0);
        return;
      }

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
    <div className='inline-block'>
      {guesses.map((guess, index) => (
        <div key={index}>
          <Guess word={word} guess={guess} isPlayed={currentIndex > index} />
        </div>
      ))}
    </div>
  );
}
