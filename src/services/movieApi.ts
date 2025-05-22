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
  },
  {
    id: 25,
    title: "3 Idiots",
    overview: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    release_date: "2009-12-25",
    vote_average: 8.4,
    genres: ["Comedy", "Drama"],
    runtime: 170
  },
  {
    id: 26,
    title: "Lagaan",
    overview: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    release_date: "2001-06-15",
    vote_average: 8.1,
    genres: ["Drama", "Sport"],
    runtime: 224
  },
  {
    id: 27,
    title: "Dangal",
    overview: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become India's first world-class female wrestlers.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    release_date: "2016-12-23",
    vote_average: 8.4,
    genres: ["Biography", "Drama", "Sport"],
    runtime: 161
  },
  {
    id: 28,
    title: "PK",
    overview: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
    release_date: "2014-12-19",
    vote_average: 8.1,
    genres: ["Comedy", "Drama", "Sci-Fi"],
    runtime: 153
  },
  {
    id: 29,
    title: "Bahubali: The Beginning",
    overview: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BZWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    release_date: "2015-07-10",
    vote_average: 8.0,
    genres: ["Action", "Drama", "Fantasy"],
    runtime: 159
  },
  {
    id: 30,
    title: "Bahubali 2: The Conclusion",
    overview: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BOGNlNmRkMjctNDgxMC00NzFhLWIzY2YtZDk3ZDE0NWZhZDBlXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BOGNlNmRkMjctNDgxMC00NzFhLWIzY2YtZDk3ZDE0NWZhZDBlXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    release_date: "2017-04-28",
    vote_average: 8.2,
    genres: ["Action", "Drama", "Fantasy"],
    runtime: 167
  },
  {
    id: 31,
    title: "Andhadhun",
    overview: "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
    release_date: "2018-10-05",
    vote_average: 8.2,
    genres: ["Crime", "Thriller"],
    runtime: 139
  },
  {
    id: 32,
    title: "Gully Boy",
    overview: "A coming-of-age story based on the lives of street rappers in Mumbai.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZDkzMjE3MjUtNjBlOC00YzFhLWFkYTktYTM2MmJkOTU0ZTMyXkEyXkFqcGdeQXVyNjE1OTgzMzg@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BZDkzMjE3MjUtNjBlOC00YzFhLWFkYTktYTM2MmJkOTU0ZTMyXkEyXkFqcGdeQXVyNjE1OTgzMzg@._V1_.jpg",
    release_date: "2019-02-14",
    vote_average: 7.9,
    genres: ["Drama", "Music"],
    runtime: 153
  },
  {
    id: 33,
    title: "Dil Chahta Hai",
    overview: "Three inseparable childhood friends are just out of college. Nothing comes between them - until they each fall in love, and their wildly different approaches to relationships creates tension.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZWI5ZWM4NzgtMzc1Yi00NGRlLWFhMDEtNmM1MTI1NjViY2E3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BZWI5ZWM4NzgtMzc1Yi00NGRlLWFhMDEtNmM1MTI1NjViY2E3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    release_date: "2001-08-10",
    vote_average: 8.1,
    genres: ["Comedy", "Drama", "Romance"],
    runtime: 183
  },
  {
    id: 34,
    title: "Gangubai Kathiawadi",
    overview: "A woman forced into prostitution becomes a powerful figure in the criminal underworld.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BN2M4YTA4ZTEtN2EyNy00YTlmLWE4YzYtYjYyYjRkMTM1NWJjXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BN2M4YTA4ZTEtN2EyNy00YTlmLWE4YzYtYjYyYjRkMTM1NWJjXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
    release_date: "2022-02-25",
    vote_average: 7.8,
    genres: ["Crime", "Drama"],
    runtime: 154
  },
  {
    id: 35,
    title: "Zindagi Na Milegi Dobara",
    overview: "Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    release_date: "2011-07-15",
    vote_average: 8.2,
    genres: ["Comedy", "Drama", "Adventure"],
    runtime: 155
  },
  {
    id: 36,
    title: "Queen",
    overview: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets canceled.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMzE4MDQzODk3MF5BMl5BanBnXkFtZTgwOTY0MTgwMzE@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMzE4MDQzODk3MF5BMl5BanBnXkFtZTgwOTY0MTgwMzE@._V1_.jpg",
    release_date: "2014-03-07",
    vote_average: 8.1,
    genres: ["Adventure", "Comedy", "Drama"],
    runtime: 146
  },
  {
    id: 37,
    title: "Pathan",
    overview: "An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
    release_date: "2023-01-25",
    vote_average: 6.8,
    genres: ["Action", "Thriller"],
    runtime: 146
  },
  {
    id: 38,
    title: "Jawan",
    overview: "A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BOWI5NmU3NTUtOTZiMS00YzA1LThlYTktNDJjYTU5NDFiMDUxXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BOWI5NmU3NTUtOTZiMS00YzA1LThlYTktNDJjYTU5NDFiMDUxXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
    release_date: "2023-09-07",
    vote_average: 7.0,
    genres: ["Action", "Thriller"],
    runtime: 169
  },
  {
    id: 39,
    title: "Animal",
    overview: "A son undergoes a remarkable transformation as the bond with his father begins to fracture, and he becomes consumed by a quest for vengeance.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMGNhZDczYzUtYjE5NS00YjJiLTg5NDUtZTVlNzBiYjRjNjU5XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMGNhZDczYzUtYjE5NS00YjJiLTg5NDUtZTVlNzBiYjRjNjU5XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
    release_date: "2023-12-01",
    vote_average: 6.1,
    genres: ["Action", "Crime", "Drama"],
    runtime: 201
  },
  {
    id: 40,
    title: "The Kashmir Files",
    overview: "A heart-wrenching narrative of the pain, suffering, and struggle endured by Kashmiri Pandits.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    release_date: "2022-03-11",
    vote_average: 8.3,
    genres: ["Drama", "History"],
    runtime: 170
  },
  {
    id: 41,
    title: "RRR",
    overview: "A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BOGQ3ZjMwZDctZTFkMi00ZjU4LWI1NjctOGZmM2QwZWZhYzc4XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BOGQ3ZjMwZDctZTFkMi00ZjU4LWI1NjctOGZmM2QwZWZhYzc4XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg",
    release_date: "2022-03-24",
    vote_average: 7.9,
    genres: ["Action", "Drama"],
    runtime: 187
  },
  {
    id: 42,
    title: "Tumbbad",
    overview: "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_.jpg",
    release_date: "2018-10-12",
    vote_average: 8.3,
    genres: ["Horror", "Fantasy", "Drama"],
    runtime: 104
  },
  {
    id: 43,
    title: "Kantara",
    overview: "It involves the traditional culture of Kambala and Bhootha Kola. A human and nature conflict where Shiva is the rebellion who works against nature. A death leads to war between villagers and evil forces.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMDNlM2U0M2MtNDYyMC00YjFiLWI2ZDItMDRhM2M4NmUyYmMxXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMDNlM2U0M2MtNDYyMC00YjFiLWI2ZDItMDRhM2M4NmUyYmMxXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg",
    release_date: "2022-09-30",
    vote_average: 8.4,
    genres: ["Action", "Drama", "Thriller"],
    runtime: 150
  },
  {
    id: 44,
    title: "Stree",
    overview: "In the small town of Chanderi, the menfolk live in fear of an evil spirit named 'Stree' who abducts men in the night. Based on the urban legend of 'Nale Ba' that went viral in Karnataka in the 1990s.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI3XkEyXkFqcGdeQXVyNzc4NTU3Njg@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI3XkEyXkFqcGdeQXVyNzc4NTU3Njg@._V1_.jpg",
    release_date: "2018-08-31",
    vote_average: 7.6,
    genres: ["Comedy", "Horror"],
    runtime: 128
  },
  {
    id: 45,
    title: "Bajrangi Bhaijaan",
    overview: "An Indian man with a magnanimous heart takes a young mute Pakistani girl back to her homeland to reunite her with her family.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMjE1NjQ5ODc2NV5BMl5BanBnXkFtZTgwOTM5ODIxNjE@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMjE1NjQ5ODc2NV5BMl5BanBnXkFtZTgwOTM5ODIxNjE@._V1_.jpg",
    release_date: "2015-07-17",
    vote_average: 8.1,
    genres: ["Adventure", "Comedy", "Drama"],
    runtime: 163
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
      
      // Limit to 10 movies for better performance
      filtered = filtered.slice(0, 10);
      
      resolve(filtered);
    }, 1000);
  });
};
