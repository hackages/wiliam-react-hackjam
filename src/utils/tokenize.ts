import { STOP_WORDS } from "../constants/stopWords";

export const tokenize = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .filter(token => STOP_WORDS.includes(token) === false);
};

export const compareTokens = (tokens1: string[], tokens2: string[]) => {
  return tokens1.filter(token => {
    return (
      tokens2.includes(token) ||
      tokens2.indexOf(token) !== -1
    );
  });
}