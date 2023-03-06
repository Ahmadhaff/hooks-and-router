import React from 'react';
import MovieCard from '../movie/MovieCard';
import './movielist.css';



const MovieList = ({movie,deleteMov}) => {
  
  return (
    
      <div  className='movie-list'>
        <div className='cardStyle'>
            {movie.map((el,i) => <MovieCard  deleteMov={deleteMov} el = {el} key = {i} />)}
        </div>
      </div>
    
  )
}

export default MovieList