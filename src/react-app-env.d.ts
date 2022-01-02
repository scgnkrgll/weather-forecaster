/// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_WEATHERBIT_API_KEY: string
    }
  }
}

export {}
