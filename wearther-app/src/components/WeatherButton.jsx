import React from 'react';

const WeatherButton = ({ city, country, icon, ...restProps}) => {
  
  return (
    <button type="button" className="location-item" >
      <span className="location-icon">{icon}</span>
      <span className="location-country">{country}</span> - <span className="location-city">{city}</span>
    </button>
  );
};

export default WeatherButton;
