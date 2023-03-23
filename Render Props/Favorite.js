import React, {Component} from "react"
import Toggler from "./Toggler"

function Favorite(props) {
    return (
        <Toggler render={function(state, toggle){
            return(
                <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={toggle}
                    >
                        {state ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
            )
        }}/>
    ) 
    
    /*
        É possível também fazer com arrow function, sendo que ficaria:
        (É a forma mais utilizada!)
    
    <Toggler render={
        (state, toggle)=>(
                <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={toggle}
                    >
                        {state ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        )
        }/>
    */
}
export default Favorite
