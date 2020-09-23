import React, {useState} from "react";

function SearchMovies() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=9334be142e76f8099045f4b428cf1524&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
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
        placeholder="i.e. The Killing"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">Search</button>
    </form>
  )
}

export default SearchMovies;