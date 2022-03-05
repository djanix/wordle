import { useKey } from 'react-use';
import Guess from '~/components/guess';
import { useRecoilState } from 'recoil';
import {
  gameStatsLossState,
  gameStatsStreakState,
  gameStatsWinState,
  guessesState,
  currentGuessIndexState,
} from '~/store';
import { Guesses } from '~/types';

type Props = {
  word: string;
};

export default function Guesses({ word }: Props) {
  const [currentGuessIndex, setCurrentGuessIndex] = useRecoilState(currentGuessIndexState);
  const [guesses, setGuesses] = useRecoilState(guessesState);
  const [, setGameStatsLoss] = useRecoilState(gameStatsLossState);
  const [, setGameStatsWin] = useRecoilState(gameStatsWinState);
  const [, setGameStatsStreak] = useRecoilState(gameStatsStreakState);

  const keyFilter = (event: KeyboardEvent) => {
    const letters = /^[A-Za-z]+$/;
    return event.key === 'Backspace' || event.key === 'Enter' || !!event.key.match(letters);
  };

  const keyFunction = ({ key }: KeyboardEvent) => {
    if (currentGuessIndex >= guesses.length) return;

    if (key === 'Enter') {
      if (currentGuessIndex >= guesses.length) return;
      if (guesses[currentGuessIndex].length < 5) return;

      if (guesses[currentGuessIndex] === word) {
        setGameStatsWin((val) => val + 1);
        setGameStatsStreak((val) => val + 1);
        return;
      }

      if (currentGuessIndex === guesses.length - 1) {
        setGameStatsLoss((val) => val + 1);
        setGameStatsStreak(0);
        return;
      }

      return setCurrentGuessIndex((currentIndex) => currentIndex + 1);
    }

    if (key === 'Backspace') {
      const guessesCopy: Guesses = [...guesses];
      guessesCopy[currentGuessIndex] = guessesCopy[currentGuessIndex].slice(0, -1);
      return setGuesses(guessesCopy);
    }

    if (guesses[currentGuessIndex].length >= 5) return;

    const guessesCopy: Guesses = [...guesses];
    guessesCopy[currentGuessIndex] = guessesCopy[currentGuessIndex] + key;
    setGuesses(guessesCopy);
  };

  useKey(keyFilter, keyFunction, { event: 'keyup' });

  return (
    <div className='inline-block'>
      {guesses.map((guess, index) => (
        <div key={index}>
          <Guess word={word} guess={guess} isPlayed={currentGuessIndex > index} />
        </div>
      ))}
    </div>
  );
}
