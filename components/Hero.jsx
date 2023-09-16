import Image from "next/image";
const Hero = () => {
  return (
    <div className="grow w-full flex items-center">
      <div className="text-white md:w-[50%] lg:w-[30%]">
        {/* Hero title */}
        <div className="text-4xl lg:text-5xl font-semibold mb-5 leading-[1.2]">
          John Wick 3: Parabellum
        </div>

        {/* Hero ratings */}
        <div className="flex items-center mb-5">
          <div className="flex items-center mr-14 text-sm font-light">
            <Image
              src="/images/imdb-logo.svg"
              height={0}
              width={0}
              alt="Rotten tomatoes icon"
              className="w-auto h-[17px] rounded-md"
            />
            <span className="ml-2">86.0/100</span>
          </div>

          <div className="flex items-center text-sm font-light">
            <Image
              src="/images/rotten-tomatoes-logo.png"
              height={0}
              width={0}
              alt="Rotten tomatoes icon"
              className="w-auto h-[17px] rounded-md"
            />
            <span className="ml-2">97%</span>
          </div>
        </div>

        {/* Hero description */}
        <div className="font-normal text-xs lg:text-sm text-gray-200 mb-5">
          John wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </div>

        {/* Hero button */}
        <button className="flex items-center bg-pink-700 h-10 px-5 rounded-lg text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
              clipRule="evenodd"
            />
          </svg>

          <span className="ml-2">WATCH TRAILER</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
