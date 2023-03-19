import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""} id="main">
            <h1 className="main--title">Fatos Divertidos do React</h1>
            <ul className="main--facts">
                <li>Criado em 2013</li>
                <li>Por Jordan Walke</li>
                <li>Possui mais de 10 mil estrelas no github</li>
                <li>É mantido pelo Facebook (Meta)</li>
                <li>Faz parte da solução de milhares de sites de empresas, incluindo aplicativos mobile</li>
            </ul>
        </main>
    )
}