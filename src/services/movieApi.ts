import { Movie, MovieGenre } from '@/types/movie';

// Mock data - In a real app, this would be fetched from a real API
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    release_date: "1994-09-23",
    vote_average: 9.3,
    genres: ["Drama"],
    runtime: 142
  },
  {
    id: 2,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    release_date: "1972-03-24",
    vote_average: 9.2,
    genres: ["Crime", "Drama"],
    runtime: 175
  },
  {
    id: 3,
    title: "The Dark Knight",
    overview: "When the menace known as The Joker emerges, Batman must face one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    release_date: "2008-07-18",
    vote_average: 9.0,
    genres: ["Action", "Crime", "Drama", "Thriller"],
    runtime: 152
  },
  {
    id: 4,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    release_date: "1994-10-14",
    vote_average: 8.9,
    genres: ["Crime", "Drama"],
    runtime: 154
  },
  {
    id: 5,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    release_date: "2010-07-16",
    vote_average: 8.8,
    genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    runtime: 148
  },
  {
    id: 6,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    release_date: "2014-11-07",
    vote_average: 8.6,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169
  },
  {
    id: 7,
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    release_date: "1999-03-31",
    vote_average: 8.7,
    genres: ["Action", "Sci-Fi"],
    runtime: 136
  },
  {
    id: 8,
    title: "Parasite",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    release_date: "2019-05-30",
    vote_average: 8.6,
    genres: ["Comedy", "Drama", "Thriller"],
    runtime: 132
  },
  {
    id: 9,
    title: "Whiplash",
    overview: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    release_date: "2014-10-10",
    vote_average: 8.5,
    genres: ["Drama", "Music"],
    runtime: 106
  },
  {
    id: 10,
    title: "The Silence of the Lambs",
    overview: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    release_date: "1991-02-14",
    vote_average: 8.6,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 118
  },
  {
    id: 11,
    title: "Spirited Away",
    overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    release_date: "2001-07-20",
    vote_average: 8.6,
    genres: ["Animation", "Adventure", "Family", "Fantasy"],
    runtime: 125
  },
  {
    id: 12,
    title: "Goodfellas",
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    release_date: "1990-09-19",
    vote_average: 8.7,
    genres: ["Biography", "Crime", "Drama"],
    runtime: 146
  },
  {
    id: 13,
    title: "Everything Everywhere All at Once",
    overview: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
    release_date: "2022-03-25",
    vote_average: 8.8,
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    runtime: 139
  },
  {
    id: 14,
    title: "Dune",
    overview: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    release_date: "2021-10-22",
    vote_average: 8.0,
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    runtime: 155
  },
  {
    id: 15,
    title: "Oppenheimer",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    release_date: "2023-07-21",
    vote_average: 8.4,
    genres: ["Biography", "Drama", "History"],
    runtime: 180
  },
  {
    id: 16,
    title: "Top Gun: Maverick",
    overview: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    release_date: "2022-05-27",
    vote_average: 8.3,
    genres: ["Action", "Drama"],
    runtime: 130
  },
  {
    id: 17,
    title: "Spider-Man: Across the Spider-Verse",
    overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    release_date: "2023-06-02",
    vote_average: 8.6,
    genres: ["Animation", "Action", "Adventure"],
    runtime: 140
  },
  {
    id: 18,
    title: "The Batman",
    overview: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    release_date: "2022-03-04",
    vote_average: 7.8,
    genres: ["Action", "Crime", "Drama"],
    runtime: 176
  },
  {
    id: 19,
    title: "Barbie",
    overview: "Barbie suffers a crisis that leads her to question her world and her existence.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    release_date: "2023-07-21",
    vote_average: 7.3,
    genres: ["Adventure", "Comedy", "Fantasy"],
    runtime: 114
  },
  {
    id: 20,
    title: "Coco",
    overview: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    release_date: "2017-11-22",
    vote_average: 8.4,
    genres: ["Animation", "Adventure", "Family"],
    runtime: 105
  },
  {
    id: 21,
    title: "Joker",
    overview: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    release_date: "2019-10-04",
    vote_average: 8.4,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 122
  },
  {
    id: 22,
    title: "The Banshees of Inisherin",
    overview: "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRkNzgyXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRkNzgyXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg", 
    release_date: "2022-10-21",
    vote_average: 7.7,
    genres: ["Comedy", "Drama"],
    runtime: 114
  },
  {
    id: 23,
    title: "Dune: Part Two",
    overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNmYzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNmYzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    release_date: "2024-03-01",
    vote_average: 8.7,
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    runtime: 166
  },
  {
    id: 24,
    title: "The Holdovers",
    overview: "A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student who has no place to go.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    release_date: "2023-10-27",
    vote_average: 8.0,
    genres: ["Comedy", "Drama"],
    runtime: 133
  }
];

const allGenres: MovieGenre[] = [
  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", 
  "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", 
  "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Sport", 
  "Thriller", "War", "Western"
];

export const getMovies = (): Promise<Movie[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMovies);
    }, 800);
  });
};

export const getGenres = (): Promise<MovieGenre[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allGenres);
    }, 300);
  });
};

// Function to simulate an ML recommendation system
export const getRecommendations = (
  preferences: {
    genres?: MovieGenre[];
    minRating?: number;
    yearRange?: [number, number];
  }
): Promise<Movie[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...mockMovies];
      
      // Filter by genre if specified
      if (preferences.genres && preferences.genres.length > 0) {
        filtered = filtered.filter(movie => 
          movie.genres.some(genre => preferences.genres!.includes(genre))
        );
      }
      
      // Filter by minimum rating if specified
      if (preferences.minRating !== undefined) {
        filtered = filtered.filter(movie => movie.vote_average >= preferences.minRating!);
      }
      
      // Filter by year range if specified
      if (preferences.yearRange) {
        filtered = filtered.filter(movie => {
          const year = new Date(movie.release_date).getFullYear();
          return year >= preferences.yearRange![0] && year <= preferences.yearRange![1];
        });
      }
      
      // Sort by rating in descending order
      filtered.sort((a, b) => b.vote_average - a.vote_average);
      
      resolve(filtered);
    }, 1000);
  });
};
