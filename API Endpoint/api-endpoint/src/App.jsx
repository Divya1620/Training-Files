import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BA&interval=5min&apikey=F16UWS4GEEB07XZD")
.then(res=>res.json)
.then(data => {
  console.log(data)
})
  return (
    <>

    </>
  )
}

export default App
