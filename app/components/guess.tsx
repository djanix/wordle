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
    if (word[index] === letter.toLowerCase()) return LetterState.correct;
    if (word.includes(letter.toLowerCase())) return LetterState.present;
    return LetterState.missing;
  }

  function getStateColor(state: LetterState): string {
    const colorMap: Record<LetterState, string> = {
      [LetterState.unknown]: 'outline-gray-300',
      [LetterState.missing]: 'outline-gray-400 bg-gray-200',
      [LetterState.present]: 'outline-yellow-300 bg-yellow-300',
      [LetterState.correct]: 'outline-green-500 bg-green-500',
    };

    return colorMap[state];
  }

  const results = Array.from(Array(word.length)).map((_, index) => ({
    letter: guess[index],
    state: getLetterState(guess[index], index, word, isPlayed),
  }));

  return (
    <div className='flex'>
      {results.map((result, index) => (
        <div
          key={index}
          className={`m-1 w-10 h-10 leading-10 text-2xl text-center font-bold uppercase outline outline-2 outline-offset-0 ${getStateColor(
            result.state
          )}`}
        >
          {result.letter}
        </div>
      ))}
    </div>
  );
}
