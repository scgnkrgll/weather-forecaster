import { useQuery } from "react-query"
import { WeatherbitErrorResponse, WeatherbitQuery, WeatherbitResponse } from "./types"

const getDailyWeather = async (query: WeatherbitQuery) => {
  const url = new URL("https://api.weatherbit.io/v2.0/forecast/daily")

  url.search = new URLSearchParams({
    ...query,
    key: process.env.REACT_APP_WEATHERBIT_API_KEY,
  }).toString()

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error("Failed to fetch")
  }

  if (response.status === 204) {
    return {} as WeatherbitResponse
  }

  return response.json()
}

const useWeatherbit = (query: WeatherbitQuery) => {
  return useQuery<WeatherbitResponse, WeatherbitErrorResponse>(["weather", query], () => getDailyWeather(query), {
    enabled: !!query.city,
  })
}

export default useWeatherbit
