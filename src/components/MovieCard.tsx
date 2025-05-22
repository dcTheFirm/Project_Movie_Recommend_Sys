
import { Movie } from "@/types/movie";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  movie: Movie;
  className?: string;
  onClick?: (movie: Movie) => void;
}

const MovieCard = ({ movie, className, onClick }: MovieCardProps) => {
  const handleClick = () => {
    if (onClick) onClick(movie);
  };

  return (
    <div 
      className={cn("movie-card cursor-pointer", className)}
      onClick={handleClick}
    >
      <img 
        src={movie.poster_path} 
        alt={movie.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="movie-card-overlay">
        <div className="flex items-center gap-2 mb-1">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium">{movie.vote_average.toFixed(1)}</span>
        </div>
        <h3 className="font-bold text-lg line-clamp-2">{movie.title}</h3>
        <div className="flex gap-2 mt-1 flex-wrap">
          {movie.genres.slice(0, 2).map(genre => (
            <span key={genre} className="badge">{genre}</span>
          ))}
        </div>
        <p className="text-xs text-gray-300 mt-2 line-clamp-2">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
