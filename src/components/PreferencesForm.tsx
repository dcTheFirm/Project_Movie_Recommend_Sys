
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MovieGenre, MoviePreferences } from "@/types/movie";
import { getGenres } from "@/services/movieApi";
import { Loader2, Sliders } from "lucide-react";

interface PreferencesFormProps {
  onSubmit: (preferences: MoviePreferences) => void;
  isLoading: boolean;
}

const PreferencesForm = ({ onSubmit, isLoading }: PreferencesFormProps) => {
  const [genres, setGenres] = useState<MovieGenre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<MovieGenre[]>([]);
  const [minRating, setMinRating] = useState(7.0);
  const [yearRange, setYearRange] = useState<[number, number]>([1990, 2025]);
  const [isLoadingGenres, setIsLoadingGenres] = useState(true);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const genresList = await getGenres();
        setGenres(genresList);
      } catch (error) {
        console.error("Failed to load genres:", error);
      } finally {
        setIsLoadingGenres(false);
      }
    };
    
    loadGenres();
  }, []);

  const handleGenreChange = (genre: MovieGenre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleSubmit = () => {
    onSubmit({
      genres: selectedGenres,
      minRating,
      yearRange,
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sliders className="h-5 w-5" />
          Movie Preferences
        </CardTitle>
        <CardDescription>
          Tell us what you like, and we'll recommend movies for you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Genres</label>
          {isLoadingGenres ? (
            <div className="flex justify-center py-4">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {genres.map(genre => (
                <Button
                  key={genre}
                  variant={selectedGenres.includes(genre) ? "default" : "outline"}
                  size="sm"
                  className={selectedGenres.includes(genre) ? "bg-movie-primary hover:bg-movie-primary/90" : ""}
                  onClick={() => handleGenreChange(genre)}
                >
                  {genre}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Minimum Rating: {minRating.toFixed(1)}
          </label>
          <Slider 
            defaultValue={[minRating]} 
            min={1} 
            max={10} 
            step={0.1} 
            onValueChange={(values) => setMinRating(values[0])}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Year Range</label>
          <div className="flex items-center gap-4">
            <Select
              value={yearRange[0].toString()}
              onValueChange={(value) => setYearRange([parseInt(value), yearRange[1]])}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 2025 - 1950 + 1 }, (_, i) => 1950 + i).map(year => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span>to</span>
            <Select
              value={yearRange[1].toString()}
              onValueChange={(value) => setYearRange([yearRange[0], parseInt(value)])}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 2025 - 1950 + 1 }, (_, i) => 1950 + i).map(year => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-movie-primary hover:bg-movie-primary/90" 
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Finding Movies...
            </>
          ) : (
            "Get Recommendations"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PreferencesForm;
