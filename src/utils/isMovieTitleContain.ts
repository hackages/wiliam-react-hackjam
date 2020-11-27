import { IMovie } from "../types";
import { tokenize, compareTokens } from "./tokenize";

export const isMovieTitleContain = (movie: IMovie, searchTerms: string): boolean => {
  const searchTokens = tokenize(searchTerms);
  const titleTokens = tokenize(movie.title);
  const tokensMatches = compareTokens(searchTokens, titleTokens);

  // console.log(
  //   'Movie title:', `"${movie.title}"`, '\n',
  //   'Title tokens:', titleTokens, '\n',
  //   'Search terms:', `"${searchTerms}"`, '\n',
  //   'Search tokens:', searchTokens, '\n',
  //   'Tokens matches:', tokensMatches
  // );

  return tokensMatches.length > 0;
};