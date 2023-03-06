import { useState } from "react";
import "./App.css";
import MovieList from "./components/movielista/MovieList";
import NavBar from "./components/navigation/NavBar";
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from "react-router-dom";
import Description from "./components/description/Description";
import './components/movielista/movielist.css'

function App() {
  const [keywords,setKeywords] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [movie, setMovie] = useState([
    {
      id:uuidv4(),
      image:
        "https://i.ebayimg.com/images/g/svIAAOSwr~hfSyhB/s-l1600.jpg",
      name: "BLACK PANTHER",
      description: "Two months into a deadly pandemic originating from the DMZ that has devastated the US and North Korea, 'Carter' awakens, with no recollections of his past. In his head is a mysterious device, and in his mouth, a lethal bomb. A strange voice in his ears gives him orders.",
      rate: 2,
      movurl:"https://www.youtube.com/embed/_Z3QKkl1WyM",
      date:" Date-2022"
    },
    {
      id:uuidv4(),
      image:
        "https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989",
      name: "AVATAR",
      description: "Available",
      rate: 5,
      movurl:"https://www.youtube.com/embed/d9MyW72ELq0"
    },
    {
      id:uuidv4(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMjYwODExNzUwMV5BMl5BanBnXkFtZTgwNTgwNjUyOTE@._V1_.jpg",
      name: "MECHANIC",
      description: "Available",
      rate: 5,
      movurl:"https://www.youtube.com/embed/QF903RaKLvs"
    },
    {
      id:uuidv4(),
      image:
        "https://i.ebayimg.com/images/g/~gEAAOSwo4pYekPb/s-l1600.jpg",
      name: "SPIDER MAN",
      description: "Available",
      rate: 4,
      movurl:"https://www.youtube.com/embed/JfVOs4VSpmA"
    },
    {
      id:uuidv4(),
      image:
        "http://cdn.shopify.com/s/files/1/1057/4964/products/Top-Gun-Maverick-Vintage-Movie-Poster-Original-Bus-Stop-48x70.jpg?v=1668661287",
      name: "TOP GUN",
      description: "Available",
      rate: 4,
      movurl:"https://www.youtube.com/embed/qSqVVswa420"
    },
    {
      id:uuidv4(),
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6aec1a106199299.5f8a325998dca.jpg",
      name: "JOHN WICK CH4",
      description: "Available",
      rate: 4,
      movurl:"https://www.youtube.com/embed/yjRHZEUamCc"
    },
   
   
  ]);

  const searchMovie = (text) => {
    setKeywords(text)
  }

  const deleteMov = (id) => {
    const FilteredMov = movie.filter(elm => elm.id !== id)
    setMovie(FilteredMov)
  }


  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element=
            {<>
              <div className="NAV">
                <NavBar movie={movie} setMovie={setMovie} searchMovie={searchMovie}/>
              </div>
                <MovieList deleteMov={deleteMov} movie={movie.filter(el=> el.name.toLowerCase().includes(keywords.toLowerCase().trim()))}/>
              </>}>
          </Route>
        
        
      <Route path="/Description/:id" element={<Description movie={movie} ></Description>}></Route>
      </Routes>
    </div>
  );
}

export default App;
