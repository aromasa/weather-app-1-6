import React, { useState, useMemo} from 'react'
  import { useEffect } from 'react';
import './Weather.css'
import WeatherButton from './WeatherButton';

const Weather = ({ name, main, weather, sys, wind, clouds, rain, ...resetProps }) => {

  const weatherIcons = useMemo(() => ({
    'CLEAR': '☀️',
    'CLOUDS': '☁️',
    'RAIN': '🌧️',
    'SNOW': '❄️',
    'THUNDERSTORM': '⛈️',
    'MIST': '🌫️',
    'SMOKE': '💨',
    'HAZE': '🌫️',
    'DUST': '🌫️',
    'FOG': '🌫️',
    'SAND': '🌫️',
    'ASH': '🌫️',
    'SQUALL': '🌬️',
    'TORNADO': '🌪️',
  }), []);

  const cities = useMemo(() => [{
    city: 'Los Angeles',
    country: 'USA',
    icon: '🇺🇸',
  }, {
    city: 'London',
    country: 'UK',
    icon: '🇬🇧',
  }, {
    city: 'Milan',
    country: 'Italy',
    icon: '🇮🇹',
  }, {
    city: 'Tokyo',
    country: 'Japan',
    icon: '🇯🇵',
  }], []);

  // 날씨 상태
  const weatherCondition =  weather?.[0]?.main.toUpperCase();
  
  // 섭씨
  const temperature =  Math.round(main?.temp);
  
  // 화씨
  const temperatureFahrenheit =  Math.round((main?.temp * 9/5) + 32);
  
  // 습도
  const humidity =  main?.humidity;
  
  const currentTime = new Date();
  
  const timeString = currentTime.toLocaleTimeString('ko-KR', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
  
  const dateString = currentTime.toLocaleDateString('ko-KR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'short' 
  });


  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="weather-left">
          <div className="details-section">
            <h3 className="section-title">Details</h3>
            <div className="details-list">
              <div className="detail-item">
                <span className="detail-label">Clouds</span>
                <span className="detail-value">{clouds?.all}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Wind</span>
                <span className="detail-value">{wind?.speed} km/h</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{humidity}%</span>
              </div>
            </div>
          </div>
          
          <div className="locations-section">
            <h3 className="section-title">Locations</h3>
            <div className="locations-list">
              {cities.map((cityData, index) => <WeatherButton key={index} {...cityData} />)}
            </div>
          </div>
        </div>

        <div className="weather-right">
          <div className="forecast-header">
            <h3 className="section-title">Forecast</h3>
          </div>
          
          <div className="main-weather">
            <div className="temperature">
              <span className="celsius">{temperature || ''}°C</span>
              <span className="fahrenheit">{temperatureFahrenheit || ''}°F</span>
            </div>
            <div className="location">{name || 'unknown'}</div>
            <div className="datetime">{timeString || ''} - {dateString || ''}</div>
            <div className="weather-condition">
              <span className="weather-icon">{weatherIcons[weatherCondition] || ''}</span>
              <span className="weather-text">{weatherCondition || ''}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Weather };