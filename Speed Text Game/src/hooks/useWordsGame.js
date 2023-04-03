import React, {useState, useRef, useEffect} from "react"

export default function useWordsGame(startingTime=10){
  const TEMPO_INICIO = 5
  const [segundos, setSegundos] = React.useState(TEMPO_INICIO)
  const [palavras, setPalavras] = React.useState("")
  const [start, setStart] = React.useState(false)
  const [contagem, setContagem] = React.useState(0)
  const inputRef = React.useRef(null)

  function handleChange(event) {
    event.preventDefault()
    const { value } = event.target
    setPalavras(value)
  }

  function calcularContagempalavras(text) {
    const arr = text.trim().split(" ")
    console.log(arr)

    return arr.filter(word => word !== "").length
  }

  function startGame() {
    setStart(true)
    setSegundos(TEMPO_INICIO)
    setPalavras
    inputRef.current.disabled = false
    inputRef.current.focus()
  }

  function endGame() {
    setStart(false)
    setContagem(calcularContagempalavras(palavras))
  }

  React.useEffect(() => {
    if (start && segundos > 0) {
      setTimeout(() => {
        setSegundos(time => time - 1)
      }, 1000)
    } else {
      endGame()
    }
  }, [segundos, start])

  return{inputRef, handleChange, palavras, start, segundos, startGame, endGame,contagem}
}