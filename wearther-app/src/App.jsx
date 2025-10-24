import { useState, useEffect } from 'react';
import './App.css';
import { Weather } from './components/Weather';

// 1. [ ] 앱 실행 시 현재 위치의 날씨 정보가 보이도록 한다.
// 2. [ ] 날씨 정보에 도시, 섭씨, 화씨, 날씨 상태가 나오도록 한다.
// 3. [ ] 5개의 버튼으로 구성(1개는 현재 위치, 나머지 4개는 다른 도시)
// 4. [ ] 버튼을 클릭할 때 클릭한 버튼에 해당하는 도시의 날씨가 보이도록 한다.
// 5. [ ] 현재 위치 버튼을 누르면 다시 현재 위치의 날씨가 나오도록 한다.
// 6. [ ] 데이터를 요청하는 동안 로딩 스피너가 보이도록 한다.

function App() {

  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () =>{    

    window.navigator.geolocation.getCurrentPosition( async (
      { coords: { latitude : lat, longitude : lon} }) => {

      // console.log({currentPosition:{lat, lon}});

      getWeatherByCurrentLocation(lat, lon);
    });
  }


  const getWeatherByCurrentLocation = async (lat, lon) =>{

    const API_KEY = 'fd26550b3dd38725e914a4893df8b001';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    
    // console.log(data);
    
    setWeather(data);
  }


  useEffect(() => {

    getCurrentLocation();

  }, []);

  return (
    <>
      <Weather {...weather} />
    </>
  );
}

export default App;
