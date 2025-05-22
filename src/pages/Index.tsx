
import { useState } from "react";
import { Movie, MoviePreferences } from "@/types/movie";
import { getRecommendations } from "@/services/movieApi";
import PreferencesForm from "@/components/PreferencesForm";
import MovieCard from "@/components/MovieCard";
import MovieDetailModal from "@/components/MovieDetailModal";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = async (preferences: MoviePreferences) => {
    setIsLoading(true);
    try {
      const recommendations = await getRecommendations(preferences);
      setMovies(recommendations);
      
      if (recommendations.length === 0) {
        toast({
          title: "No movies found",
          description: "Try adjusting your preferences to see more recommendations.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Recommendations ready!",
          description: `Found ${recommendations.length} movies matching your preferences.`,
        });
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to fetch movie recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-4 border-b border-border">
        <div className="container max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-movie-primary">
            MovieMind
          </h1>
          <p className="text-muted-foreground mt-2">
            Your AI-powered movie recommendation system
          </p>
        </div>
      </header>
      
      <main className="flex-1 container max-w-7xl py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <PreferencesForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          </div>
          
          <div className="md:col-span-2">
            {movies.length > 0 ? (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  Top Recommendations
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {movies.map(movie => (
                    <MovieCard 
                      key={movie.id} 
                      movie={movie} 
                      className="aspect-[2/3]"
                      onClick={handleMovieClick}
                    />
                  ))}
                </div>
              </div>
            ) : isLoading ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
                <Loader2 className="h-12 w-12 animate-spin mb-4 text-movie-primary" />
                <h2 className="text-xl font-medium">Finding the perfect movies for you...</h2>
                <p className="text-muted-foreground mt-2">Our AI is analyzing your preferences</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome to MovieMind!</h2>
                <p className="text-muted-foreground max-w-md">
                  Select your preferences and our machine learning algorithm will
                  recommend movies tailored just for you.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t border-border">
        <div className="container max-w-7xl px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 MovieMind • AI-Powered Movie Recommendation System
          </p>
        </div>
      </footer>
      
      <MovieDetailModal
        movie={selectedMovie}
        isOpen={showModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
