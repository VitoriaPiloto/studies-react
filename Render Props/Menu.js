import React from "react"
import Toggler from "./Toggler"

function Menu(props) {
    return (
        <Toggler render={
            (state, toggle) => (
             <div>
                <button onClick={toggle}>{state ? "Hide" : "Show"} Menu </button>             <nav style={{display: state ? "block" : "none"}}>
                        <h6>Signed in as Coder123</h6>
                        <p><a>Your Profile</a></p>
                        <p><a>Your Repositories</a></p>
                        <p><a>Your Stars</a></p>
                        <p><a>Your Gists</a></p>
                </nav>
              </div>
            )
        }/>
    ) 
}

export default Menu