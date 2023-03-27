import './App.css'
import React, { useState, useEffect } from 'react'
export default function App() {
  const [totalSegundos, setTotalSegundos] = useState(0)

  const minutos = Math.floor(totalSegundos / 60)

  const segundos = totalSegundos % 60

  function handleChange(event){
    event.preventDefault()
    const {value} = event.target
    setTotalSegundos( value * 60) 
  }

  useEffect(() => {
    if (totalSegundos === 0) {
      alert("Inicie o cronometro!")
    } else {
      const intervalId = setInterval(() => {
        setTotalSegundos(prevSegundos => prevSegundos - 1)
      }, 1000)
      return()=>clearInterval(intervalId)
    }

  }, [totalSegundos])

  return (
    <div id="principal">
      <h1>Cronômetro</h1>
      <input type="number" name="numero" onChange={handleChange}/>
      <div id="numeros">
        <span id="num">{minutos.toString().padStart(2, "0")}              </span>
        <span>:</span>
        <span>{segundos.toString().padStart(2, "0")}</span>
      </div>
    </div>
  )
}
