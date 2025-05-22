
import { Movie } from "@/types/movie";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie;
  className?: string;
  onClick?: (movie: Movie) => void;
}

const MovieCard = ({ movie, className, onClick }: MovieCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
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
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          imageLoaded ? "opacity-100" : "opacity-0"
        )}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        width={200}
        height={300}
      />
      {!imageLoaded && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
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
