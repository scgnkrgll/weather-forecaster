import { FC, useState } from "react"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"
import styles from "./WeatherChart.module.css"

const WeatherChart: FC<{
  cityName: string
  series: any[]
  categories: string[]
  onMarkerClick?: (index: number) => void
}> = ({ series, cityName, categories, onMarkerClick }) => {
  const [options] = useState<ApexOptions>({
    chart: {
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },

      events: {
        markerClick: function (event, chartContext, { seriesIndex, dataPointIndex, config }) {
          if (typeof onMarkerClick === "function") {
            onMarkerClick(dataPointIndex)
          }
        },
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
      offsetY: -5,
      formatter: (val: number) => val.toFixed(2),
      background: {
        enabled: false,
        dropShadow: {
          enabled: false,
        },
      },
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: `Average High & Low Temperature for ${cityName}`,
      align: "center",
      style: {
        fontWeight: "normal",
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories,
    },
    yaxis: {
      title: {
        text: "Temperature",
        style: {
          fontWeight: "normal",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  })

  return (
    <div className={styles.chart}>
      <ReactApexChart options={options} series={series} type="line" width={"100%"} height={350} />
    </div>
  )
}

export default WeatherChart
