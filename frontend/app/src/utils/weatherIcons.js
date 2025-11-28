import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloudy,
  WiStrongWind,
  WiRain,
  WiDayRain,
  WiNightAltRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiDayShowers,
  WiNightAltShowers
} from 'weather-icons-react';


export const getWeatherIcon = (code, isDay = true) => {
  const weatherCode = Number(code);

  switch (weatherCode) {
    // --- LIMPO / ENSOLARADO ---
    case 1000: // Clear, Sunny
      return isDay ? WiDaySunny : WiNightClear;

    // --- NUBLADO / PARCIALMENTE NUBLADO ---
    case 1100: // Mostly Clear
    case 1101: // Partly Cloudy
      return isDay ? WiDayCloudy : WiNightAltCloudy;
    
    case 1102: // Mostly Cloudy
    case 1001: // Cloudy
      return WiCloudy;

    // --- VENTO ---
    case 3000: // Light Wind
    case 3001: // Wind
    case 3002: // Strong Wind
      return WiStrongWind;

    // --- CHUVA LEVE / GAROA ---
    case 4000: // Drizzle
    case 4200: // Light Rain
      return isDay ? WiDayShowers : WiNightAltShowers;

    // --- CHUVA ---
    case 4001: // Rain
      return isDay ? WiDayRain : WiNightAltRain;
    
    case 4201: // Heavy Rain
      return WiRain; // Chuva forte geralmente é cinza/fechado dia e noite

    // --- NEVE ---
    case 5000: // Snow
    case 5001: // Flurries
    case 5100: // Light Snow
    case 5101: // Heavy Snow
      return WiSnow;

    // --- TEMPESTADE ---
    case 8000: // Thunderstorm
      return WiThunderstorm;

    // --- NEBLINA ---
    case 2000: // Fog
    case 2100: // Light Fog
      return WiFog;

    // --- PADRÃO ---
    default:
      return isDay ? WiDayCloudy : WiNightAltCloudy;
  }
};


export const getWeatherColor = (code, isDay = true) => {
  const weatherCode = Number(code);

  if (weatherCode === 1000) return isDay ? '#FFB300' : '#A0C4FF';
  
  
  if ([1100, 1101].includes(weatherCode) && isDay) return '#FFD54F';


  if ([4000, 4001, 4200, 4201].includes(weatherCode)) return '#4FC3F7';
  

  if (weatherCode === 8000) return '#5E35B1';

  if ([5000, 5001, 5100, 5101].includes(weatherCode)) return '#B2EBF2';

  return '#90A4AE'; 
};