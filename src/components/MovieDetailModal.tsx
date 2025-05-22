
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types/movie";
import { Clock, Star } from "lucide-react";

interface MovieDetailModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

const MovieDetailModal = ({ movie, isOpen, onClose }: MovieDetailModalProps) => {
  if (!movie) return null;
  
  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const releaseYear = new Date(movie.release_date).getFullYear();
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl overflow-hidden bg-card">
        <div className="relative w-full h-64 -mt-6 -mx-6">
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
          <img
            src={movie.backdrop_path}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
        <DialogHeader className="pt-0 -mt-16 z-20 relative">
          <DialogTitle className="text-2xl font-bold">{movie.title} ({releaseYear})</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-wrap gap-3 mt-2">
          {movie.genres.map(genre => (
            <span key={genre} className="badge">{genre}</span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span>{movie.vote_average.toFixed(1)}/10</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{formatRuntime(movie.runtime)}</span>
          </div>
        </div>
        
        <p className="text-sm mt-4">{movie.overview}</p>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button className="bg-movie-primary hover:bg-movie-primary/90">
            Add to Watchlist
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetailModal;
