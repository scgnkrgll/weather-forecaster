import { FC } from "react"
import styles from "./WeatherCard.module.css"
import { WeatherDatum } from "../../hooks/useWeatherbit/types"

const WeatherCard: FC<{
  data: WeatherDatum
  cityName: string
}> = ({ data, cityName }) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.temp}>{data.temp}°C</div>
      <div className={styles.city}>{cityName}</div>
      <div className={styles.date}>
        {new Date(data.datetime).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
      </div>
      <div className={styles.description}>
        <img className={styles.icon} src={`/icons/${data.weather.icon}.png`} alt={data.weather.description} />
        <span>{data.weather.description}</span>
      </div>
    </div>
  )
}
export default WeatherCard
