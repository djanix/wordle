import { useLoaderData } from 'remix';
import words from '~/data/words.json';
import Guesses from '~/components/guesses';
import Stats from '~/components/stats';
import Theme from '~/components/theme';

export const loader = async (): Promise<string> => {
  const wordIndex = Math.round(Math.random() * (words.length - 1));
  return words[wordIndex];
};

export default function Index() {
  const word = useLoaderData<string>();

  return (
    <div className='text-center'>
      <Theme />
      <h1>Wordle</h1>
      <h2>{word}</h2>
      <Guesses word={word} />
      <Stats />
    </div>
  );
}
