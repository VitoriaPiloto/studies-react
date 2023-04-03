import React from "react"
import useWordsGame from "./hooks/useWordsGame"


export default function App() {

  const {
        inputRef, 
        handleChange, 
        palavras, 
        start, 
        segundos, 
        startGame,
        endGame,
        contagem
    } = useWordsGame(5)
  
  return (
    <div>
      <h1>Você digita rápido?</h1>
      <textarea ref={inputRef} name="texto" onChange={handleChange} value={palavras} disabled={!start} />
      <h4>Tempo restante: {segundos}</h4>
      <button onClick={start ? endGame : startGame}>{start ? "PARAR" : "INICIAR"}</button>
      <h1>Contagem de palavras: {contagem}</h1>
    </div>
  )
}