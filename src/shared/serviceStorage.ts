export const SCORES_STORAGE_KEY = 'scores';

export const getScoresFromLocalStorage = (): number[] => {
  return JSON.parse(window.localStorage.getItem(SCORES_STORAGE_KEY) || '[]') as number[];
}

export const setScoresOnLocalStorage = (item: number[]): void => {
  window.localStorage.setItem(SCORES_STORAGE_KEY, JSON.stringify(item));
}