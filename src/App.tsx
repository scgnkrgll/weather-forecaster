import { useState } from "react"
import useWetherbit from "./hooks/useWeatherbit"
import Navbar from "./components/Navbar"
import SearchInput from "./components/SearchInput"
import Layout from "./components/Layout"
import WeatherCard from "./components/WeatherCard"

function App() {
  const [city, setCity] = useState("")

  const { isLoading, data, error } = useWetherbit({
    city,
  })

  return (
    <div>
      <Navbar />

      <Layout>
        <SearchInput className="mt-large" placeHolder="Search City" onChange={(e) => setCity(e.target.value)} />
        <div className="mt-large d-flex justify-content-center align-items-center min-container-height flex-column">
          {!city ? (
            <>
              <h1>No city is selected!</h1>
              <p>Type any city name to get weekly forecast data</p>
            </>
          ) : isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Something went wrong {error?.error && error.error}</div>
          ) : data && Object.keys(data).length > 0 ? (
            <>
              <WeatherCard data={data!.data[0]} cityName={data.city_name} />
            </>
          ) : (
            <div>"City doesn’t exist!"</div>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default App
