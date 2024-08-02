import React from 'react'
import './Card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

// import 

const Card = () => {
  return (
    <>
      
      <div className="container-card">


        <figure className="card card--3" >
          <figcaption>

            <span className="info">
              <h3>The Desert</h3>
              <span>by Keith Hardy</span>
            </span>
            <span className="links">
              <a > <FontAwesomeIcon icon={faHeart} /></a>
              <a target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a target="_blank"><FontAwesomeIcon icon={faShare} /></a>
            </span>
          </figcaption>
        </figure>
        <figure className="card card--3" >
          <figcaption>

            <span className="info">
              <h3>The Desert</h3>
              <span>by Keith Hardy</span>
            </span>
            <span className="links">
              <a href="#"> <FontAwesomeIcon icon={faHeart} /></a>
              <a href="#" target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://unsplash.com/photos/PP8Escz15d8" target="_blank"><FontAwesomeIcon icon={faShare} /></a>
            </span>
          </figcaption>
        </figure>
        <figure className="card card--3" >
          <figcaption>

            <span className="info">
              <h3>The Desert</h3>
              <span>by Keith Hardy</span>
            </span>
            <span className="links">
              <a href="#"> <FontAwesomeIcon icon={faHeart} /></a>
              <a href="#" target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://unsplash.com/photos/PP8Escz15d8" target="_blank"><FontAwesomeIcon icon={faShare} /></a>
            </span>
          </figcaption>
        </figure>
        <figure className="card card--3" >
          <figcaption>

            <span className="info">
              <h3>The Desert</h3>
              <span>by Keith Hardy</span>
            </span>
            <span className="links">
              <a href="#"> <FontAwesomeIcon icon={faHeart} /></a>
              <a href="#" target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://unsplash.com/photos/PP8Escz15d8" target="_blank"><FontAwesomeIcon icon={faShare} /></a>
            </span>
          </figcaption>
        </figure>

        <figure className="card card--3" >
          <figcaption>

            <span className="info">
              <h3>The Desert</h3>
              <span>by Keith Hardy</span>
            </span>
            <span className="links">
              <a href="#"> <FontAwesomeIcon icon={faHeart} /></a>
              <a href="#" target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://unsplash.com/photos/PP8Escz15d8" target="_blank"><FontAwesomeIcon icon={faShare} /></a>
            </span>
          </figcaption>
        </figure>
        {/* <figure className="card card--4">
      <figcaption>
        <span className="info">
          <h3>The Ocean</h3>
          <span>by Dan Stark</span>
        </span>
        <span className="links">
          <a href="#"><i className="fas fa-heart" /></a>
          <a href="#" target="_blank"><i className="fab fa-instagram" /></a>
          <a href="https://unsplash.com/photos/DLwUVlzrP0Q" target="_blank"><i className="fas fa-share" /></a>
        </span>
      </figcaption>
    </figure> */}
      </div>
      {/* <div className="support">
    <a href="https://twitter.com/DevLoop01" target="_blank"><i className="fab fa-twitter-square" /></a>
    <a href="https://dribbble.com/devloop01" target="_blank"><i className="fab fa-dribbble" /></a>
  </div> */}


    </>
  )
}

export default Card
