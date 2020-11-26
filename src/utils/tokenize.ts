import { STOP_WORDS } from "../constants/stopWords";

export const tokenize = (terms: string) => {
  return terms
    .toLowerCase()
    .split(' ')
    .filter(token => STOP_WORDS.includes(token) === false);
};

export const compareTokens = (tokens1: string[], tokens2: string[]) => {
  return tokens1.filter(token => {
    return (
      tokens2.includes(token) ||
      tokens2.indexOf(token) !== -1 ||
      tokens2.find(t => t.startsWith(token)) ||
      tokens2.find(t => t.endsWith(token))
    );
  });
}