import React from "react";

const Card = (movie) => {
  console.log(movie.info);
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="shadow-md shadow-secondaryBlue w-64 bg-primaryTan m-4 rounded-md box-border overflow-hidden relative">
        <img
          src={img_path + movie.info.poster_path}
          alt="Movie Poster"
          className="w-full h-64"
        />
        <div className="flex flex-col justify-center items-center group/card">
          <div className="w-full p-4 flex items-center justify-around ">
            <h4 className="w-40 items-center text-center">
              {movie.info.title}
            </h4>
            <p className="bg-primaryBlue w-12 h-12 rounded-[50%] flex justify-center items-center text-secondaryTan font-bold border border-primaryBlue shadow-inner shadow-black/50 absolute right-1 bottom-1">
              {movie.info.vote_average}
            </p>
          </div>
          <div className="absolute left-0 bottom-0 max-h-full bg-primaryTan/90 text-black box-border p-4 transition-all ease-in-out duration-300 overflow-y-auto translate-y-full group-hover/card:translate-y-0">
            <h1 className="text-2xl">Overview</h1>
            {movie.info.overview}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
