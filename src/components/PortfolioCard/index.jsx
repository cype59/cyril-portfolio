import React from 'react';
import './index.scss';

const PortfolioCard = ({name, image, description} ) => {
  return (
    <div className='portfolio-card'>
        <img src={image} alt={name} />
        <hr />
        <h1>{name}</h1>
        <h2>{description}</h2>
    </div>
  )
}

export default PortfolioCard;