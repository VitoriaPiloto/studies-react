import React from 'react'
import Navb from './components/Navb'
import Places from './components/Places'
import Footer from './components/Footer'
import data from './data.js'

export default function App(){
    const place = data.map(item => 
        <Places
            key = {item.id}
            {...item}
        />
    )
    return(
        <div>
             <Navb />
             <section className="cards-list">
                {place}
             </section>
             <Footer/>
        </div>
    )
}