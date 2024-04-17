import React, { useEffect, useState } from 'react';
import StandardCarousel from './StandardCarousel';
import './homePage.css';
import fetchTrendingMovies from '../components/trendingData';
import fetchTopRatedMovies from '../components/topratedData';
import { Link } from 'react-router-dom';


const Home = () => {
  const [movieList, setTrendingMovies] = useState([]);
  const [movieLists, setTRatedList] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => {
      setTrendingMovies(data.slice(0, 8)); // Only show the first 7 trending movies on the homepage
    });
    fetchTopRatedMovies().then(data => {
      setTRatedList(data.slice(0,8));
    });
  }, []);
  return (
    <div>
    <StandardCarousel/>
    <body>
{/* Trending */}
      <section>
        <head className='head'>
          <a className='mainhead'>Trending Now</a>
          <ul>
              <a className='viewmore'><Link to="/Trending">View More</Link></a>
          </ul>
        </head>
        <ul className = 'sswrapper'>
          {movieList.map((movie, index) => (
        <div key={index} style={{ position: 'relative', display: 'inline-block', justifyContent: 'center' }}>
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img className='sscard'
              id={`trend_image_${index}`}            
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              
            />
          </Link>
        </div>
      ))}
        </ul>
      </section>
{/* Best Rated */}
      <section>
      <head className='head'>
          <a className='mainhead'>Best Rated</a>
          <ul>
              <a className='viewmore'><Link to="/Best-Rated">View More</Link></a>
          </ul>
        </head>
        <ul className='sswrapper'>
        {movieLists.map((movie, indexs) => (
        <div key={indexs} style={{ position: 'relative', display: 'inline-block', justifyContent: 'center' }}>
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img className='sscard'
              id={`trend_image_${indexs}`}            
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          </Link>
        </div>
      ))}
        </ul>
      </section>

      {/* <section>
        <h1>Trending Reviews</h1>
        <ul className = 'review-list'>
          <div className = 'review-sscard'>
            <div className = 'review-star'></div>
            <div className = 'heart'></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className = 'review-sscard'>
            <div className = 'review-star'></div>
            <div className = 'heart'></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className = 'review-sscard'>
            <div className = 'review-star'></div>
            <div className = 'heart'></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </ul>
        <ul className = 'review-list'>
          <div className = 'review-sscard'>
            <div className = 'review-star'></div>
            <div className = 'heart'></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className = 'review-sscard'>
            <div className = 'review-star'></div>
            <div className = 'heart'></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className = 'review-sscard'>
            <div className = 'review-star'></div>
            <div className = 'heart'></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </ul>
      </section>

      <section>
        <h1>Oscars Awarded</h1>
        <ul className = 'oscar-list'>
        <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
          <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
          <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
          <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
          <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
        </ul>
      </section>

      <section>
        <h1>Coming Soon</h1>
        <ul className = 'upcoming-release-list'>
        <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
          <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
          <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
          <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
          <div className = 'sscard'>
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className = 'title'>Title (Release Year)</p>
          </div>
        </ul>
      </section> */}

    </body>
    </div>
  );
}

export default Home
