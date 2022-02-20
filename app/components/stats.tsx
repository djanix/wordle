import { useRecoilValue } from 'recoil';
import { gameStatsWinState, gameStatsLossState, gameStatsStreakState } from '~/store';

export default function Stats() {
  const gameStatsWin = useRecoilValue(gameStatsWinState);
  const gameStatsLoss = useRecoilValue(gameStatsLossState);
  const gameStatsStreak = useRecoilValue(gameStatsStreakState);

  return (
    <div className='mt-10'>
      <div>Win: {gameStatsWin}</div>
      <div>Loss: {gameStatsLoss}</div>
      <div>Streak: {gameStatsStreak}</div>
    </div>
  );
}
