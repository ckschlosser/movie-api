import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faM, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

let API_key = "&api_key=fc5b37a75c326abb12430a31d3d2172b";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;

const Content = () => {
  ////////Getting movie data, setting url to specific genres, search input/////////
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
    if (movieType == "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType == "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_key;
    }
    if (movieType == "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10" +
        API_key;
    }
    if (movieType == "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    if (movieType == "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    setUrl(url);
  };

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
      <nav className="w-full h-16 bg-secondaryBlue flex justify-around items-center">
        <div className="hidden md:flex md:">
          <ul className="flex">
            {arr.map((value) => {
              return (
                <li className="text-secondaryTan mr-4 text-md px-2 py-1 hover:bg-primaryBlue hover:rounded-2xl hover:duration-300">
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
        <div className="md:hidden cursor-pointer">
          <FontAwesomeIcon
            icon={faBars}
            className="text-3xl"
            onClick={() => setShowSideBar(true)}
          />
        </div>
        <form>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="outline-0 border-1 border-secondaryBlue border-solid rounded-tl-3xl rounded-bl-3xl py-1 px-3 text-secondaryTan bg-primaryBlue shadow-inner shadow-secondaryBlue"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyDown={searchMovie}
            />
            <button className="outline-0 border-1 border-secondaryBlue border-solid rounded-tr-3xl rounded-br-3xl py-1 px-2 text-secondaryTan bg-secondaryBlue shadow-inner shadow-primaryBlue">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
            </button>
          </div>
        </form>
        {close}
        {menuMask}
        {sideBar}
      </nav>
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
