import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from '../components/Card';

function Home() {
    return (
      <body className="app">
        <div className= 'Banner'>

        </div>
        
        <section>
          <h1>Trending Now </h1>
          <p className= 'see-more'>See More<div></div></p>
          <div className = 'left-arrow'></div>
          <ul className = 'trend-now-list'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </ul>
          <div className = 'right-arrow'><div></div></div>
        </section>
  
        <section>
          <h1>Trending Reviews</h1>
          <ul className = 'review-list'>
            <div className = 'review-card'>
            </div>
            <div className = 'review-card'>
              <div className = 'review-star'></div>
              <div className = 'heart'></div>
            </div>
            <div className = 'review-card'>
              <div className = 'review-star'></div>
              <div className = 'heart'></div>
            </div>
          </ul>
          <ul className = 'review-list'>
            <div className = 'review-card'>
              <div className = 'review-star'></div>
              <div className = 'heart'></div>
            </div>
            <div className = 'review-card'>
              <div className = 'review-star'></div>
              <div className = 'heart'></div>
            </div>
            <div className = 'review-card'>
              <div className = 'review-star'></div>
              <div className = 'heart'></div>
            </div>
          </ul>
        </section>
  
        <section>
          <h1>Oscars Awarded</h1>
          <div className = 'left-arrow'><div></div></div>
          <ul className = 'oscar-list'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </ul>
          <div className = 'right-arrow'><div></div></div>
        </section>
  
        <section>
          <h1>Coming Soon</h1>
          <div className = 'left-arrow'><div></div></div>
          <ul className = 'upcoming-release-list'>
          <div className = 'card'>
              <p>Image Here</p>
              <p>Enlarges When Hovering</p>
              <p className = 'title'>Release Date: Mon DD YYYY</p>
            </div>
            <div className = 'card'>
              <p>Image Here</p>
              <p>Enlarges When Hovering</p>
              <p className = 'title'>Release Date: Mon DD YYYY</p>
            </div>
            <div className = 'card'>
              <p>Image Here</p>
              <p>Enlarges When Hovering</p>
              <p className = 'title'>Release Date: Mon DD YYYY</p>
            </div>
            <div className = 'card'>
              <p>Image Here</p>
              <p>Enlarges When Hovering</p>
              <p className = 'title'>Release Date: Mon DD YYYY</p>
            </div>
            <div className = 'card'>
              <p>Image Here</p>
              <p>Enlarges When Hovering</p>
              <p className = 'title'>Release Date: Mon DD YYYY</p>
            </div>
          </ul>
          <div className = 'right-arrow'><div></div></div>
        </section>
        
      </body>
    );
  }

export default Home;