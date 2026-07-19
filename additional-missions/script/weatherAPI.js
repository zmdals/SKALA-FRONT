export async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("날씨 API 요청 실패");
    }
    const data = await response.json();
    return data.current_weather; //데이터만 넘김
}