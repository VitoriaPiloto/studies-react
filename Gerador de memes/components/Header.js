import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Generador de meme</h2>
            <h4 className="header--project">Curso React - Projeto 3</h4>
        </header>
    )
}