import { useRecoilState } from 'recoil';
import { gameStatsWinState, gameStatsLossState, gameStatsStreakState } from '~/store';

export default function Stats() {
  const [gameStatsWin] = useRecoilState(gameStatsWinState);
  const [gameStatsLoss] = useRecoilState(gameStatsLossState);
  const [gameStatsStreak] = useRecoilState(gameStatsStreakState);

  return (
    <div className='mt-10'>
      <div>Win: {gameStatsWin}</div>
      <div>Loss: {gameStatsLoss}</div>
      <div>Streak: {gameStatsStreak}</div>
    </div>
  );
}
