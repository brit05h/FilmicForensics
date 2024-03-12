import React, {useEffect, useState} from 'react'

function Movie() {
    const [movieList, setMovieList] = useState([])

    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=d98b6a4a470bc2415959e8cfff5c445e")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect(()=>{
        getMovie()
    },[])

    console.log(movieList)

    return (
      <div style={{ backgroundColor: '#1E0D1E', padding: '30px' }}>
      <h1 style={{color: 'white', fontSize: '75px'}}>Trending</h1>
      {movieList.map((movie)=>(
        <img style={{width:"291px", height:"436px", marginLeft:"10px",marginTop:"10px", borderRadius:'17px'}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
      ))}
    </div>
  )
}

export default Movie
