import { useLoaderData } from 'remix';
import words from '~/data/words.json';
import Guess from '~/components/guess';

export const loader = async (): Promise<string> => {
  const wordIndex = Math.round(Math.random() * (words.length - 1));
  return words[wordIndex];
};

export default function Index() {
  const word = useLoaderData<string>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Wordle</h1>
      <h2>{word}</h2>
      <Guess />
    </div>
  );
}
