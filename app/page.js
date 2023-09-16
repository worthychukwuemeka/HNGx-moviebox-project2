"use client";
import MovieCard from "@components/MovieCard";
import NavBar from "@components/NavBar";
import Hero from "@components/Hero";
import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram } from "react-feather";

export default function HomePage() {
  // State to store movies array
  const [featuredMovies, setFeaturedMovies] = useState([]);

  // State to store search results
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  // Function to fetch movie every time the page loads
  useEffect(() => {
    const fetchMovies = async () => {
      // Request options
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTkyNjc1OTYxZmMxNzlmNmEzNDQ2NmZlZDA5YjJkNyIsInN1YiI6IjY1MDM0MDkxNjNhYWQyMDBmZTJhZTc3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BGKGFcUY_JU_U30Q4WfBLURh5kG3Y4oRswQHY5LW1Uw'
        },
      };

      // Function to fetch movies or log errors
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          options
        );

        // Function to destructure results from the response
        const data = await response.json();

        // Function to display 12 top-rated movies
        const movies = data?.results?.slice(0, 12).map((movie) => ({
          ...movie,
          // Function to convert release date to UTC format
          releaseDate: new Date(movie.release_date).toUTCString(),
        }));

        setFeaturedMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  // Function to make a search on submit
  const handleSearch = async (e) => {
    e.preventDefault();
    const query = e.target[0].value;

    // func to check if the query is empty and reset search results
    if (!query) {
      setSearchResults([]);
      return;
    }

    // Request options
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmIzOTQ4YjBkZDk5ZjExZjE3NDU1ODRmNjkzMTgyYSIsInN1YiI6IjY1MDM0MzhmNmEyMjI3MDExYTdjMThmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.utQFnGKpQ-uH7wRJLiQKjd66_TFYTRfm55sCpopijjc'
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&include_adult=false`,
        options
      );

      const data = await response.json();

      setShowSearch(true);
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
      setShowSearch(false);
    }
  };

  return (
    <main className="h-full w-full font-bold">
      {/* Hero section */}
      <div className="flex flex-col hero h-full md:h-[40%] lg:h-full mb-10 px-5 md:px-10 lg:px-20" data-testid="hero-section">
        {/* NavBar and Hero components */}
        <NavBar
          resultParams={{ searchResults, setSearchResults }}
          handleSearch={handleSearch}
          showSearchParams={{ showSearch, setShowSearch }}
          data-testid="navbar"
        />
        <Hero data-testid="hero-component" />
      </div>

      {/* Movie list section */}
      <div className="h-fit mb-10 px-5 md:px-10 lg:px-20 bg-redd-500" data-testid="movie-list-section">
        <div className="text-2xl font-extrabold mb-5" data-testid="featured-movies-heading">
          Featured Movies
        </div>
        {featuredMovies && (
          <div className="grid grid-cols-12 gap-10 responsive">
            {featuredMovies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                movieId={movie.id}
                releaseDate={movie.releaseDate} 
                posterPath={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                rating={movie.vote_average}
                data-testid={`movie-card-${index}`}
                utc-release-date-testid={`movie-utc-release-date-${index}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer section */}
      <footer className="flex justify-center items-center" data-testid="footer-section">
        <div
          className="_container_1r95s_1 _footer_1r95s_89"
          style={{ maxWidth: "492px", textAlign: "center" }}
        >
          <div
            className="_social_1r95s_98"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <div className="facebook" data-testid="facebook-icon">
              <Facebook />
            </div>
            <div className="twitter" data-testid="twitter-icon">
              <Twitter />
            </div>
            <div className="instagram" data-testid="instagram-icon">
              <Instagram />
            </div>
          </div>
          <div
            className="footer-links"
            style={{ textAlign: "center", marginBottom: "16px" }}
          >
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                display: "flex",
                gap: "36px",
                alignItems: "center",
              }}
            >
              <li data-testid="conditions-of-use">Conditions of Use</li>
              <li data-testid="privacy-policy">Privacy & Policy</li>
              <li data-testid="press-room">Press Room</li>
            </ul>
          </div>
          <p style={{ color: "gray" }}>
            &copy; 2023 MovieBox by Chukwuemeka Worthy
          </p>
        </div>
      </footer>
    </main>
  );
}
