import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { gameStatsWinState, gameStatsLossState, gameStatsStreakState } from '~/store';

export default function Stats() {
  const gameStatsWin = useRecoilValue(gameStatsWinState);
  const gameStatsLoss = useRecoilValue(gameStatsLossState);
  const gameStatsStreak = useRecoilValue(gameStatsStreakState);
  const [stats, setStats] = useState({ win: 0, loss: 0, streak: 0 });

  // Use a useEffect to prevent server/client content mismatch because of localstorage value
  useEffect(() => {
    setStats({
      win: gameStatsWin,
      loss: gameStatsLoss,
      streak: gameStatsStreak,
    });
  }, [gameStatsWin, gameStatsLoss, gameStatsStreak]);

  return (
    <div className='mt-10'>
      <div>Win: {stats.win}</div>
      <div>Loss: {stats.loss}</div>
      <div>Streak: {stats.streak}</div>
    </div>
  );
}
