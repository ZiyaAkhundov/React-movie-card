import React, { useEffect, useState } from 'react';
import Card from './components/card';
import Search from './components/search';


function App() {
  const [movie, setMovie] = useState([]);
  const [search,setSearch] = useState('')
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('http://localhost:3003/movies');
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);
  
  const movieFilter=(data)=>{
    setSearch(data.target.value)
  }
  let filteredMovies=movie.filter(movies=>{
    return movies.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  })
  return (
    <div className='row'>
      <div className='row mb-4'>
        <Search movieFilter={movieFilter}/>
      </div>
      {filteredMovies.map((movies) => (
        <Card movie={filteredMovies} setMovie={setMovie} movielist={movies} key={movies.id} />
      ))}
    </div>
  );
}

export default App;
