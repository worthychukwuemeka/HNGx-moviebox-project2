import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = ({ resultParams, handleSearch, showSearchParams }) => {
  // Function to initialize parameters sent from page.js
  const { searchResults, setSearchResults } = resultParams;
  const { showSearch, setShowSearch } = showSearchParams;

  return (
    <div className="-mx-5 px-5 lg:mx-0 h-20 lg:h-24 bg-pink-600 md:bg-transparent flex items-center justify-between">
      <div className="md:block w-auto h-10 lg:h-14">
        <Image
          src="/images/logo-white.svg"
          alt="Movie box logo with text"
          width={200}
          height={70}
        />
      </div>

      {/* Search form */}
      <form
        onSubmit={handleSearch}
        className="hero-search lg:relative h-10 md:w-[40%] lg:w-[50%] flex items-center border  border-white rounded-lg text-white px-3"
      >
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="bg-transparent grow outline-none text-sm"
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Code to display search results */}
        {showSearch && (
          <div className="absolute top-20 lg:top-12 left-0 bg-[#fff] text-black w- w-full min-h-38 p-5 shadow-xl">
            <div className="flex items-center justify-between text-xl font-semibold mb-5">
              <span>Results</span>
              <span
                className="cursor-pointer"
                onClick={() => setShowSearch(false)}
              >
                X
              </span>
            </div>
            {searchResults.map((result) => (
              <Link href={`/movie/${result?.id}`}>
                <div
                  key={result.id}
                  className="flex items-center w-full font-normal mb-2 pb-2 border-b"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                    alt={result.title + " cover image"}
                    height={30}
                    width={30}
                  />
                  <div className="ml-2">
                    <h4>{result.title}</h4>
                    <p className="text-xs text-gray-500">
                      {result.release_date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </form>

      <div className="hidden md:flex items-center text-white">
        <div className="mr-5 font-normal">Sign in</div>
        <div className="flex items-center justify-center h-10 w-10 bg-pink-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
