import {IGenre, IMovie} from '../src/types';
import {isMovieBelongsToCategory} from '../src/utils/isMovieBelongsToCategory';

const allGenres: IGenre[] = [
    {
        id: 28,
        name: "Action",
    },
    {
        id: 12,
        name: "Adventure",
    },
    {
        id: 16,
        name: "Animation",
    }
]

test('isMovieBelongsToCategory filter should return true when one of movie genres matches the category name', () => {
    // Given
    const theDarkKnightMovie: IMovie =   {
        id: 155,
        title: "The Dark Knight",
        poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        genre_ids: [18, 28, 80, 53],
        backdrop_path: "/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg",
    };

    // When
    const movieBelongsToCategory = isMovieBelongsToCategory(allGenres)(theDarkKnightMovie, 'Action');

    // Then
    expect(movieBelongsToCategory).toBe(true)
});

test('isMovieBelongsToCategory filter should return FALSE when NONE of movie genres match the category name', () => {
    // Given
    const theDarkKnightMovie: IMovie =   {
        id: 155,
        title: "The Dark Knight",
        poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        genre_ids: [18, 28, 80, 53],
        backdrop_path: "/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg",
    };

    // When
    const movieBelongsToCategory = isMovieBelongsToCategory(allGenres)(theDarkKnightMovie, 'Animation');

    // Then
    expect(movieBelongsToCategory).toBe(false)
});

test('isMovieBelongsToCategory filter should return true when regardless the movie genres when category name is All', () => {
    // Given
    const theDarkKnightMovie: IMovie =   {
        id: 155,
        title: "The Dark Knight",
        poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        genre_ids: [18, 28, 80, 53],
        backdrop_path: "/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg",
    };

    // When
    const movieBelongsToCategory = isMovieBelongsToCategory(allGenres)(theDarkKnightMovie, 'All');

    // Then
    expect(movieBelongsToCategory).toBe(true)
});
