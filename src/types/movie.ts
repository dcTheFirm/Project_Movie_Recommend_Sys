
export type MovieGenre = 
  | "Action" | "Adventure" | "Animation" | "Biography" | "Comedy" 
  | "Crime" | "Documentary" | "Drama" | "Family" | "Fantasy" 
  | "History" | "Horror" | "Music" | "Musical" | "Mystery" 
  | "Romance" | "Sci-Fi" | "Sport" | "Thriller" | "War" | "Western";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genres: MovieGenre[];
  runtime: number;
}

export interface MoviePreferences {
  genres: MovieGenre[];
  minRating: number;
  yearRange: [number, number];
}
