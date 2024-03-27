import React from 'react';
import '../App.css';

function Card(){
    return (
        <div className = 'card'>
            <p>Image Here</p>
          <p>Enlarges When Hovering</p>
          <p className = 'title'>Title (Release Year)</p>
        </div>
    );
}
export default Card;