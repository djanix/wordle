type Props = {
  word: string;
  guess: string;
  isPlayed: boolean;
};

enum LetterState {
  unknown = 'unknown',
  missing = 'missing',
  present = 'present',
  correct = 'correct',
}

export default function Guess({ word, guess, isPlayed }: Props) {
  function getLetterState(letter: string, index: number, word: string, isPlayed: boolean): LetterState {
    if (!isPlayed) return LetterState.unknown;
    if (word[index] === letter) return LetterState.correct;
    if (word.includes(letter)) return LetterState.present;
    return LetterState.missing;
  }

  function getStateColor(state: LetterState): string {
    const colorMap: Record<LetterState, string> = {
      [LetterState.unknown]: 'bg-gray-300',
      [LetterState.missing]: 'bg-gray-400',
      [LetterState.present]: 'bg-yellow-300',
      [LetterState.correct]: 'bg-green-500',
    };

    return colorMap[state];
  }

  const results = Array.from(Array(word.length)).map((_, index) => ({
    letter: guess[index],
    state: getLetterState(guess[index], index, word, isPlayed),
  }));

  return (
    <span>
      {results.map((result, index) => (
        <span key={index} className={getStateColor(result.state)}>
          {result.letter}
        </span>
      ))}
    </span>
  );
}
