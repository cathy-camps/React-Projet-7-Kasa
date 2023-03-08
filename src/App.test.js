import { render, screen } from '@testing-library/react';
import App from './pages/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import { useNavigate } from 'react-router-dom';

function MonComposant() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/route-de-destination');
  }

  return (
    <button onClick={handleClick}>Aller à la route de destination</button>
  );
}

function lastImageClick() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const lastIndex = images.length - 1
  if (currentImageIndex === lastIndex) {
    setCurrentImageIndex(0)
  }
}

const details = data
console.log(data)

import React, { useState } from 'react'
import Header from '../components/Header/IndexH'
import Footer from '../components/Footer/IndexF'
import styles from '../components/Property/property.module.css'
import Properties from '../Properties/Properties'
import { useParams } from 'react-router-dom'
import PropertyCarousel from '../components/PropertyCarousel/PropertyCarousel'

function Property() {
  const { propertyId } = useParams()
  const property = Properties.find((property) => property.id === propertyId)
  const { pictures, title, location, host, rating, equipments, tags } = property

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const prevPhoto = () => {
    setCurrentPhotoIndex((currentPhotoIndex - 1 + pictures.length) % pictures.length);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((currentPhotoIndex + 1) % pictures.length);
  };

  return (
    <div>
      <Header />
      <main className={styles.property}>
        <h1 className={styles.property_title}>{title}</h1>
        <p className={styles.property_location}>{location}</p>
        <div className={styles.property_tags}></div>
        <PropertyCarousel
          name={title}
          photos={pictures}
          currentIndex={currentPhotoIndex}
          onPrevClick={prevPhoto}
          onNextClick={nextPhoto}
        />
      </main>
      <Footer />
    </div>
  )
}



import React from 'react';
import styles from './PropertyCarousel.module.css';

function PropertyCarousel(props) {
  const { name, photos, currentIndex, onPrevClick, onNextClick } = props;
  const totalPhotos = photos.length;
  const currentPhoto = photos[currentIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.photo}>
        <img src={currentPhoto} alt={name} />
      </div>
      <div className={styles.navigation}>
        <button className={styles.prevButton} onClick={onPrevClick}>
          Previous
        </button>
        <span className={styles.currentIndex}>
          {currentIndex + 1} / {totalPhotos}
        </span>
        <button className={styles.nextButton} onClick={onNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PropertyCarousel;
