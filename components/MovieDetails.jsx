"use client";
import React, { useEffect, useState } from "react";
import { Heart, Share2, Bookmark, Star, PlayCircle, Calendar, LogOut } from "react-feather"; // Importing Feather icons

const DetailsPage = ({ params }) => {
  const [movie, setmovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmIzOTQ4YjBkZDk5ZjExZjE3NDU1ODRmNjkzMTgyYSIsInN1YiI6IjY1MDM0MzhmNmEyMjI3MDExYTdjMThmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.utQFnGKpQ-uH7wRJLiQKjd66_TFYTRfm55sCpopijjc'
  },
        };
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params?.id}?language=en-US`,
          options
        );

        const result = await response.json();
        console.log(result);
        setmovie(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getMovieDetails();
  }, []);

  return (
    <div className="overflow-hidden bg-white flex flex-col md:flex-row gap-4 w-full items-start">
      <div className="md:relative flex flex-col w-full md:w-56 md:items-end md:pt-[282px] md:pb-[606px]">
        <div className="border-solid w-full md:w-56 md:h-[982px] bg-white absolute top-0 left-0 flex flex-col gap-4 md:pt-12 md:pb-10 border-black/30 border rounded-tr-[45px] rounded-br-[45px]">
          <div className="flex flex-row gap-3 items-center mb-6 mx-5">
            <img
              src="/images/logo-white.svg"
              alt="Movie box logo with text"
              className="self-start w-12"
              width={300}
              height={140}
              data-testid="logo"
            />
            <div className="text-2xl font-bold leading-[24px] text-[#333333]" data-testid="movieDetails-title">
              Moviebox
            </div>
          </div>
          <div className="self-start flex flex-row gap-3 w-1/2 items-start mb-2 ml-10" data-testid="home-link">
            <Calendar className="w-8" /> {/* Replace with Calendar icon */}
            <div className="text-xl font-semibold text-[#666666]">
              Home
            </div>
          </div>
          <div className="bg-[rgba(190,18,60,0.1)] flex flex-row gap-3 h-20 items-center mb-2 mx-0 pt-6 px-10" data-testid="movies-link">
            <PlayCircle className="w-8" /> {/* Replace with PlayCircle icon */}
            <div className="text-xl font-semibold text-[#be123c]">
              Movies
            </div>
          </div>
          <div className="self-start flex flex-row gap-3 w-3/5 items-start mb-2 ml-10" data-testid="tv-series-link">
            <img
              src="/images/tv-icon.png"
              className="w-8"
              data-testid="tv-icon"
            />
            <div className="text-xl font-semibold text-[#666666] w-2/3">
              TV Series
            </div>
          </div>
          <div className="flex flex-row gap-3 items-start mb-2 mx-10" data-testid="upcoming-link">
            <img
              src="/images/calendar-icon.png"
              className="w-8"
              data-testid="calendar-icon"
            />
            <div className="text-xl font-semibold text-[#666666]">
              Upcoming
            </div>
          </div>
          <div className="relative flex flex-col items-center mx-6 pb-12 px-16">
            <div className="border-solid border-[rgba(190,18,60,0.7)] w-[171px] h-[211px] bg-[rgba(248,231,235,0.4)] absolute top-4 left-0 flex flex-col justify-end gap-2 items-center p-4 border rounded-[20px]" data-testid="play-quiz">
              <div className="text-sm font-semibold text-[rgba(51,51,51,0.8)] mb-1">
                Play movie quizzes
                <br />
                and earn
                <br />
                free tickets
              </div>
              <div className="text-xs font-medium text-[#666666]">
                50k people are playing
                <br />
                now
              </div>
              <div className="bg-[rgba(190,18,60,0.2)] self-stretch flex flex-col h-8 items-center mx-3 py-1 rounded-[30px]">
                <div className="text-xs font-medium text-[#be123c]">
                  Start playing
                </div>
              </div>
            </div>
            <div
              className="shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] relative w-8 h-8"
              data-testid="shadow-element"
            />
          </div>
          <div className="self-start flex flex-row gap-2 w-1/2 items-start" data-testid="logout-link">
            <LogOut className="w-8" /> {/* Replace with LogOut icon */}
            <div className="text-xl font-semibold text-[#666666] w-2/3">
              Log out
            </div>
          </div>
        </div>
        <img
          src="/images/logo.svg"
          className="md:relative w-4"
          alt="Logo"
          data-testid="logo-svg"
        />
      </div>
      <div className="self-end flex flex-col gap-4 w-full">
        <div className="bg-[url(https://file.rendit.io/n/IbDKvLKKuWOAPn4C7op3.png)] bg-cover bg-center bg-no-repeat flex flex-col mb-6 gap-2 h-[449px] md:h-[100vh] items-center pt-32 pb-40">
          <div className="bg-[url(https://file.rendit.io/n/9SXEIgyVDASQ7tpKwVpA.svg)] bg-cover bg-center bg-no-repeat flex flex-col justify-center h-32 items-center" data-testid="play-circle-bg">
            <PlayCircle className="w-16 mx-8" /> {/* Replace with PlayCircle icon */}
          </div>
          <div className="text-2xl font-medium text-[#e8e8e8]">Watch Trailer</div>
        </div>
        <div className="flex flex-col gap-2 items-start ml-4 mr-4 md:ml-5 md:mr-5">
          <div className="flex flex-row gap-2 items-start">
            <div className="text-2xl font-medium" style={{ color: "#404040", fontFamily: "DM Sans", fontSize: "23px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginBottom: "8px" }} data-testid="movie-title">
              {movie.title}
            </div>
            <div className="contents" style={{ color: "#404040", fontFamily: "DM Sans", fontSize: "23px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>•</div>
            <div className="contents" style={{ color: "#404040", fontFamily: "DM Sans", fontSize: "23px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{movie.releaseDate?.split("-")[0]}</div>
            <div className="contents" style={{ color: "#404040", fontFamily: "DM Sans", fontSize: "23px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>•</div>
            <div className="contents" style={{ color: "#404040", fontFamily: "DM Sans", fontSize: "23px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>PG-13</div>
            <div className="font-bold contents" style={{ color: "#404040", fontFamily: "DM Sans", fontSize: "23px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>•</div>
            <div className="contents" style={{ color: "#404040", fontFamily: "DM Sans", fontSize: "23px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{movie.runtime} min</div>
          </div>
          <div className="flex flex-row gap-2 items-start" data-testid="rating-section">
            <Heart className="w-8" data-testid="heart-icon" /> 
            <Share2 className="w-8" data-testid="share-icon" /> 
            <Bookmark className="w-8" data-testid="bookmark-icon" />
            <div className="flex flex-row gap-2 w-20 items-start">
              <Star className="w-8" data-testid="star-icon" />
              <div className="text-2xl font-medium text-[#e8e8e8]">
                8.5 <div className="text-xl text-[#666666] contents">| 350k</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start ml-3 mr-3 md:ml-5 md:mr-5">
          <div className="text-xl font-medium text-[#333333] ml-2" data-testid="tagline">
            {movie.tagline}
          </div>
          <img src="/images/divider.svg" alt="Divider" data-testid="divider-image" />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <div className="bg-[#be123c] flex flex-row justify-center pt-3 gap-2 w-[360px] h-12 items-center rounded-lg" data-testid="get-tickets">
            <img
              src="/images/two-tickets-icon.png"
              className="w-8"
              alt="Two Tickets Icon"
            />
            <div className="text-lg font-medium text-white">Get Tickets</div>
          </div>
          <div className="bg-[#404040] flex flex-row justify-center w-[360px] h-12 items-center rounded-lg" data-testid="watch-trailer">
            <PlayCircle className="w-8" />
            <div className="text-lg font-medium text-white">Watch Trailer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
