import { atom } from 'recoil';
import { localStorageEffect } from './effects';
import { Guesses } from '~/types';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
  effects: [localStorageEffect('darkMode')],
});

export const gameStatsWinState = atom({
  key: 'gameStatsWinState',
  default: 0,
  effects: [localStorageEffect('game_stats_win')],
});

export const gameStatsLossState = atom({
  key: 'gameStatsLossState',
  default: 0,
  effects: [localStorageEffect('game_stats_loss')],
});

export const gameStatsStreakState = atom({
  key: 'gameStatsStreakState',
  default: 0,
  effects: [localStorageEffect('game_stats_streak')],
});

export const guessesState = atom<Guesses>({
  key: 'guessesState',
  default: ['', '', '', '', ''],
});

export const currentGuessIndexState = atom({
  key: 'currentGuessIndexState',
  default: 0,
});
