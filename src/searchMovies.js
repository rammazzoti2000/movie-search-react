import React from "react";

function SearchMovies(){

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const query = 'The Killing';

    const url = `https://api.themoviedb.org/3/search/movie?api_key=9334be142e76f8099045f4b428cf1524&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">Movie Name</label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. The Killing"/>
      <button className="button" type="submit">Search</button>
    </form>
  )
}

export default SearchMovies;