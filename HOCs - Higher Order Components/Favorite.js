import React, {Component} from "react"
import {withToggler} from "./HOCS/withToggler"

function Favorite(props) {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={props.toggle}
                    >
                        {props.on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        ) 
}

const  FavoriteWithToggler = withToggler(Favorite, {defaultOnValue: false})
export default FavoriteWithToggler