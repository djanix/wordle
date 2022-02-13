import { atom } from 'recoil';

export const gameStatsWinState = atom({
  key: 'gameStatsWinState',
  default: 0,
});

export const gameStatsLossState = atom({
  key: 'gameStatsLossState',
  default: 0,
});

export const gameStatsStreakState = atom({
  key: 'gameStatsStreakState',
  default: 0,
});
