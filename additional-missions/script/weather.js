const citySelect = document.getElementById("citySelect");
const p = document.getElementById("weatherResult");

const cityLatAndLon = {
    chicago: { name: "미국 시카고", lat: 41.8781, lon: -87.6298 },
    london:  { name: "영국 런던", lat: 51.5074, lon: -0.1278 },
    hanoi:   { name: "베트남 하노이", lat: 21.0278, lon: 105.8342 },
    tokyo:   { name: "일본 도쿄", lat: 35.6895, lon: 139.6917 }
}

function showWeather(e){
    const selectedCity = e.target.value;
    if(selectedCity === "none"){
        p.textContent = "도시를 선택해주세요";
        return;
    }
    const info = cityLatAndLon[selectedCity]; 
    getWeather(info);
}

async function getWeather(info){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${info.lat}&longitude=${info.lon}&current_weather=true`;
    try {
        p.textContent = "날씨를 가져오는 중 입니다..."
        const weather = await fetch(url);
        const res = await weather.json();
        const temp = res.current_weather.temperature;
        const windspeed = res.current_weather.windspeed;
        p.textContent = `${info.name}\n위도: ${info.lat}\n경도: ${info.lon}\n현재 기온: ${temp}°C\n풍속: ${windspeed}`;
    } catch(err){
        p.textContent = "날씨를 불러오는데 실패했습니다.";
        return;
    }
}

citySelect.addEventListener("change",showWeather);