import React, { useEffect, useState } from "react";
import Card from "./Card";
export let API_key = "&api_key=fc5b37a75c326abb12430a31d3d2172b";
export let base_url = "https://api.themoviedb.org/3";
export let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;

const Content = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setData(data.results);
      });
  }, [url_set]);

  return (
    <div className="bg-primaryBlue h-full w-full">
      <div className="m-auto w-4/5 flex justify-center flex-wrap">
        {movieData.length == 0 ? (
          <p>Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </div>
  );
};

export default Content;
