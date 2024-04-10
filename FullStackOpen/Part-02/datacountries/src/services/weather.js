import axios from "axios"

const API = import.meta.env.VITE_WEATHER_KEY
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"

const forecast = latlng => {
    return axios.get(`${baseUrl}lat=${latlng[0]}&lon=${latlng[1]}&appid=${API}&units=metric`)
}

export default {forecast}