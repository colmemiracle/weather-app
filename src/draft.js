gettingWeather = async () =>{
  const api_url = await
  fetch("http://api.openweathermap.org/data/2.5/weather?q=${town.value}&appid=9ed2cc0d52d0095dc17fc83a4ee6b92e");
  const data = await api_url.json();
  console.log(data)
}