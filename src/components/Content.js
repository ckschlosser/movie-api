import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Info from "./movieInfoConfig.json";
import Nav from "./Nav";

let API_key = process.env.React_App_TMDB_API;
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;

const Content = () => {
  ////////Getting movie data, setting url to specific genres/////////
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setData(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    const found = Info.movieInfo.find((element) => element.genre == movieType);
    if (found) {
      url = base_url + found.path + API_key;
    }

    setUrl(url);
  };

  /////////////For Search Bar//////////////
  const searchMovie = (event) => {
    if (event.key == "Enter") {
      url =
        base_url +
        "/search/movie?api_key=fc5b37a75c326abb12430a31d3d2172b&query=" +
        search;
      setUrl(url);
      setSearch(" ");
    }
  };

  //////////////////////Side Nav Bar and array for nav items//////////////////////////////////
  let arr = ["Popular", "Theatre", "Drama", "Comedy", "Kids"];
  const [showSideBar, setShowSideBar] = useState(false);

  let sideBar = (
    <div className="fixed top-0 left-0 w-64 h-screen bg-primaryTan z-50 shadow-inner shadow-primaryBlue -translate-x-full">
      <ul className="mt-16 border-b-2 border-primaryBlue">
        {arr.map((value) => {
          return (
            <li className="text-2xl border-t-2 border-primaryBlue w-full text-center py-3 cursor-pointer hover:bg-secondaryTan hover:shadow-innerXL hover:shadow-primaryBlue hover:duration-700">
              <a href="#" name={value}>
                {value}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
  let menuMask;
  let close;

  if (showSideBar) {
    sideBar = (
      <div className="fixed top-0 left-0 w-64 h-screen bg-primaryTan z-50 shadow-inner shadow-primaryBlue translate-x-0 ease-in duration-300">
        <ul className="mt-16 border-b-2 border-primaryBlue">
          {arr.map((value) => {
            return (
              <li className="text-2xl border-t-2 border-primaryBlue w-full text-center py-3 cursor-pointer hover:bg-secondaryTan hover:shadow-innerXL hover:shadow-primaryBlue hover:duration-700">
                <a
                  href="#"
                  name={value}
                  onClick={(e) => {
                    getData(e.target.name);
                  }}
                >
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
    menuMask = (
      <div
        className="bg-primaryTan/30 fixed top-0 left-0 w-full h-full z-40"
        onClick={() => setShowSideBar(false)}
      ></div>
    );
    close = (
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute top-3 left-3 text-2xl z-[60] cursor-pointer"
        onClick={() => setShowSideBar(false)}
      />
    );
  }

  showSideBar
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <>
      <Nav
        getData={getData}
        arr={arr}
        setShowSideBar={setShowSideBar}
        setSearch={setSearch}
        close={close}
        menuMask={menuMask}
        sideBar={sideBar}
        search={search}
        searchMovie={searchMovie}
      />
      <div className="bg-primaryBlue min-h-screen w-full">
        <div className="m-auto w-4/5 flex justify-center flex-wrap">
          {movieData.length == 0 ? (
            <p className="text-3xl font-extrabold pt-5">Not Found</p>
          ) : (
            movieData.map((res, pos) => {
              return <Card info={res} key={pos} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
