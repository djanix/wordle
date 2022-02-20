import { AtomEffect } from 'recoil';

export const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    // TODO: prevent the effect from running on the server: https://remix.run/docs/en/v1/guides/constraints#rendering-with-browser-only-apis
    if (typeof document === 'undefined') return;

    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
