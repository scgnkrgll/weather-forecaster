import { useState } from "react"
import useWetherbit from "./hooks/useWeatherbit"
import Navbar from "./components/Navbar"
import SearchInput from "./components/SearchInput"
import Layout from "./components/Layout"
import WeatherCard from "./components/WeatherCard"
import WeatherChart from "./components/WeatherChart"
import { formatDate } from "./utils"
import Alert from "./components/Alert"

function App() {
  const [city, setCity] = useState("")
  const [index, setIndex] = useState(0)

  const { isLoading, data, error } = useWetherbit({
    city,
    days: "8",
  })

  return (
    <div>
      <Navbar />

      <Layout>
        <SearchInput className="mt-large" placeHolder="Search City" onChange={(e) => setCity(e.target.value)} />
        <div className="mt-large d-flex justify-content-center align-items-center min-container-height flex-column">
          {!city ? (
            <Alert title="No city is selected!" message="Type any city name to get weekly forecast data" />
          ) : isLoading ? (
            <Alert title="Loading..." />
          ) : error ? (
            <div>Something went wrong {error?.error && error.error}</div>
          ) : data && Object.keys(data).length > 0 ? (
            <div className="d-flex align-items-center justify-content-center flex-wrap content">
              <WeatherChart
                series={[
                  {
                    name: "High",
                    data: data.data.map((temp) => temp.max_temp),
                  },
                  {
                    name: "Low",
                    data: data.data.map((temp) => temp.min_temp),
                  },
                ]}
                categories={data.data.map((temp) => formatDate(temp.valid_date))}
                cityName={data.city_name}
                onMarkerClick={(index) => setIndex(index)}
              />
              <WeatherCard data={data!.data[index]} cityName={data.city_name} />
            </div>
          ) : (
            <Alert
              title="City doesn’t exist!"
              message="Type a valid city name to get weekly forecast data"
              type="warning"
            />
          )}
        </div>
      </Layout>
    </div>
  )
}

export default App
