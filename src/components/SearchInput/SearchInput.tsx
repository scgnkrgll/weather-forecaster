import { FC } from "react"
import { DebounceInput } from "react-debounce-input"
import styles from "./SearchInput.module.css"

interface SearchInputProps {
  placeHolder: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: FC<SearchInputProps> = ({ placeHolder = "Search...", onChange, className }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <DebounceInput
        className={styles.input}
        minLength={2}
        debounceTimeout={300}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  )
}
export default SearchInput
