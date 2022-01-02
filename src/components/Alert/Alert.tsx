import { FC } from "react"
import styles from "./Alert.module.css"

interface AlertProps {
  title: string
  message?: string
  type?: "success" | "warning" | "error"
}

const Alert: FC<AlertProps> = ({ type = "", title, message }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className={`${styles.title} ${styles[type]}`}>{title}</div>
      {message && <div className={styles.message}>{message}</div>}
    </div>
  )
}

export default Alert
