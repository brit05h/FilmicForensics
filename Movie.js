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

    const handleMouseEnter = (index) => {
      const image = document.getElementById(`image_${index}`);
      if (image) {
        image.style.transform = "scale(1.1)"; // Enlarge by 10%
      }
    };
  
    // Function to handle mouse leave event (restore original size)
    const handleMouseLeave = (index) => {
      const image = document.getElementById(`image_${index}`);
      if (image) {
        image.style.transform = "scale(1)"; // Restore original size
      }
    };

    return (
      <div style={{ backgroundColor: '#1E0D1E', padding: '30px' }}>
      <h1 style={{color: 'white', fontSize: '75px'}}>Trending</h1>
      {movieList.map((movie, index)=>(
        <img 
          key = {index}
          id = {`image_${index}`}
          style={{width:"400px", height:"px", marginLeft:"10px",marginTop:"10px", borderRadius:'17px', transition: `transform 0.3s`}} 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        />
      ))}
      <p style={{color: 'white'}}>Courtesy of TMDb</p>
    </div>
  )
}

export default Movie
