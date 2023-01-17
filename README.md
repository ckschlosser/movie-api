# Movie API project with React/Tailwind CSS

## A fully functional Movie API app, showcasing my ability to use an API in varies ways.

This project is a movie search app through IMDB. Search movies by the topics or using the search bar. This project shows how to do the following:

- Create a fully functional and responsive movie api app
- Use of API in the search bar
- Use of API in the navigation links
- How to build movie cards with animation to show the movie description

## Skills used in project

- HTML5
- Tailwind CSS
- JavaScript
- Reactjs
- TMDB API

## Some of the code I am proud of

This is a simple code snippet that finds the correct url from the nav links and displays the correct movies in that genre.

```React
const getData = (movieType) => {
    const found = Info.movieInfo.find((element) => element.genre == movieType);
    if (found) {
      url = base_url + found.path + API_key;
    }

    setUrl(url);
  };
```

# Vists the [Moive API](https://movie-api-gray.vercel.app/)

This application is hosted on vercel
