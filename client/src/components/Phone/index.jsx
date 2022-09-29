import { Link } from 'react-router-dom';
import './Phone.scss';
import React from 'react';

const Phone = ({ data, showFull }) => {
  const {
    id,
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram
  } = data;

  return (
    (!showFull && (
      <>
        <h2>
          {name} - {manufacturer}
        </h2>
        <p>{description}</p>
        <img
          src={`${process.env.REACT_APP_REST_API_URL}/${imageFileName}`}
          alt={name}
        />
      </>
    )) || (
      <div className="fullPhone">
        <h2>
          {name} - {manufacturer}
        </h2>
        <div className="data">
          <div className="description">
            <p>{description}</p>

            <h3>Specifications:</h3>
            <ul>
              <li>Color: {color}</li>
              <li>Screen: {screen}</li>
              <li>Processor: {processor}</li>
              <li>RAM: {ram}</li>
            </ul>
            <h3>Price: {price} $</h3>
          </div>
          <div className="image">
            <img
              src={`${process.env.REACT_APP_REST_API_URL}/${imageFileName}`}
              alt={name}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Phone;
