import {IMovie} from '../src/types';
import {isMovieTitleContain} from '../src/utils';


test('isMovieTitleContain filter should return true when the movie title contains the search terms', () => {
    // Given
    const sanAndreasMovie: IMovie = {
        id: 254128,
        title: 'San Andreas',
        poster_path: '/qey0tdcOp9kCDdEZuJ87yE3crSe.jpg',
        genre_ids: [28, 18, 53],
        backdrop_path: '/cUfGqafAVQkatQ7N4y08RNV3bgu.jpg',
    };
    const searchTerms = 'San Andr';

    // When
    const moveTitleContainsSearchTerms = isMovieTitleContain(sanAndreasMovie, searchTerms)

    // Then
    expect(moveTitleContainsSearchTerms).toBe(true)
});

test('isMovieTitleContain filter should return false when the movie title DOES NOT contain the search terms', () => {
    // Given
    const sanAndreasMovie: IMovie = {
        id: 254128,
        title: 'San Andreas',
        poster_path: '/qey0tdcOp9kCDdEZuJ87yE3crSe.jpg',
        genre_ids: [28, 18, 53],
        backdrop_path: '/cUfGqafAVQkatQ7N4y08RNV3bgu.jpg',
    };
    const searchTerms = 'Thor';

    // When
    const moveTitleContainsSearchTerms = isMovieTitleContain(sanAndreasMovie, searchTerms)

    // Then
    expect(moveTitleContainsSearchTerms).toBe(false)
});


test('isMovieTitleContain filter should return true when the movie title contains the search terms with different case', () => {
    // Given
    const pulpFictionMovie: IMovie = {
        id: 680,
        title: 'Pulp Fiction',
        poster_path: '/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
        genre_ids: [53, 80],
        backdrop_path: '/mte63qJaVnoxkkXbHkdFujBnBgd.jpg',
    };
    const searchTerms = 'pulp fiction';

    // When
    const moveTitleContainsSearchTerms = isMovieTitleContain(pulpFictionMovie, searchTerms)

    // Then
    expect(moveTitleContainsSearchTerms).toBe(true)
});

test('isMovieTitleContain filter should return true when the search terms are in center of movie title', () => {
    // Given
    const theDarkKnightMovie: IMovie =   {
            id: 155,
            title: "The Dark Knight",
            poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
            genre_ids: [18, 28, 80, 53],
            backdrop_path: "/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg",
        };
    const searchTerms = 'dark';

    // When
    const moveTitleContainsSearchTerms = isMovieTitleContain(theDarkKnightMovie, searchTerms)

    // Then
    expect(moveTitleContainsSearchTerms).toBe(true)
});
