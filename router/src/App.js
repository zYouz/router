import './App.css';
import MoviesList from  './Components/MoviesList';
import MovieCard from './Components/MovieCard';
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';
import Description from './Components/Description';
import BandeAnnonce from './Components/BandeAnnonce';
import React, {useState} from 'react';
import {Route,Routes} from 'react-router-dom'
function App() {
  const[movies,setMovies] = useState([
    { id: Math.random(), 
      Title: "Shawshank Redemption",
      Description :"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      PosterURL : "https://www.netflix.com/tn-en/title/70005379",
      rating : "4.8",
      ImageMovies : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3290/3290236_sa.jpg",
      Annonces: "https://www.youtube.com/embed/6hB3S9bIaco"
  },

    { id:  Math.random(), 
      Title: "Interstellar",
      Description :"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      PosterURL : "https://www.netflix.com/tn-en/title/70305903",
      rating : "4.5",
      ImageMovies: "https://picfiles.alphacoders.com/101/101684.jpg",
      Annonces : "https://www.youtube.com/embed/zSWdZVtXT7E"
      },

      { id:  Math.random(), 
        Title: "12 Angry Men",
        Description :"Forced to work for the cartel that murdered her boyfriend, Teresa relies on instinct, a loyal friend and a mysterious notebook to survive.",
        PosterURL : "https://www.amazon.com/gp/video/detail/amzn1.dv.gti.68a9f72c-56a9-80ee-9baa-dde28308bf13?tag=deciderrg-20",
        rating : "3",
        ImageMovies: "http://static.rogerebert.com/uploads/movie/movie_poster/12-angry-men-1957/large_mswBMPecmV7NpKTbMCpYuGzFqfh.jpg",
        Annonces : "https://www.youtube.com/embed/_13J_9B5jEk"
        },
  ]);
        const [movie, setMovie] = useState({
          Title: "",
          ImageMovies: "",
          Descreption: "",
          PosterURL: "",
          Rating:""
        });

      const addMovie = (movieAdd) => {
        setMovies([...movies, movieAdd]);
      };

      const handleSearch= (Title,rating) =>{
        const mv = movies.filter((item) => (item.Title.includes(Title) ) && (item.rating >= rating)) 
        setMovies(mv)
      }

      const handleChange = (e) =>{
        setMovie({...movie, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e) =>{
        e.preventDefault()
        addMovie({...movie})
      };
  return (
    <div className="App"> 
        <Navbar addMovie={addMovie} handleSearch={handleSearch} />
        <Routes>
        <Route exact path='/Description/:description' element={<Description movies={movies}/>}>
        <Route path='' element={<BandeAnnonce movies={movies}/>}/>
        </Route>
        <Route path='/' element={<><MoviesList  movies={movies}/> <MovieCard handleChange={handleChange} handleSubmit={handleSubmit}/> </>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
