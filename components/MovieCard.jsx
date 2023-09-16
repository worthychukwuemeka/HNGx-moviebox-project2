import Image from "next/image";
import Link from "next/link";
import { PlusCircle, Heart } from "react-feather";
import { useState } from "react";

const MovieCard = ({ title, releaseDate, posterPath, movieId, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to display an alert message when a button is clicked
  const handleButtonClick = (message) => {
    alert(message);
  };

  return (
    <div
      className={`relative flex flex-col col-span-6 md:col-span-4 lg:col-span-3 ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Link to movie details page */}
      <Link href={`movie/${movieId}`}>
        {/* Movie poster */}
        <div className="h-[400px] overflow-hidden mb-2 cursor-pointer">
          <Image
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="Movie poster image"
            width={500}
            height={750}
            className={`w-full h-auto object-contain transition-transform ${
              isHovered ? "scale-105" : ""
            }`}
          />
        </div>
      </Link>

      {/* Buttons for watchlist and favorites as icons */}
      <div className="absolute top-2 right-2 flex space-x-2">
        <button
          className="text-red-500 bg-white hover:bg-red-600 hover:text-white p-2 rounded-full opacity-70"
          onClick={() => handleButtonClick("Added to Favorites")}
        >
          <Heart size={24} />
        </button>
        <button
          className="text-blue-500 bg-white hover:bg-blue-600 hover:text-white p-2 rounded-full opacity-70"
          onClick={() => handleButtonClick("Added to Watchlist")}
        >
          <PlusCircle size={24} />
        </button>
      </div>

      {/* Card name */}
      <div className="font-bold text-lg leading-none">{title}</div>

      {/* Release year */}
      <div
        className="text-gray-600 font-normal"
        data-testid="movie-release-date"
      >
        Release Date: {releaseDate}
      </div>

      {/* Rating */}
      <div className="text-gray-600 font-normal" data-testid="movie-rating">
        Vote: {rating}
      </div>
    </div>
  );
};

export default MovieCard;
