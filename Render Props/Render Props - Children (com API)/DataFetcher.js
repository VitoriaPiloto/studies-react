import React, {Component} from "react"

/**
 * Challenge: Fill in the blanks in the code here (part 1) and in the App.js
 * file (part 2) until the code is working.
 * 
 * Render props are meant to allow us to re-use functionalty in multiple places.
 * If your app were never to become more complicated than what we have here, it's
 * probably not worth the effort to create a separate data fetching component.
 * 
 * HOWEVER, if you did find yourself repeating these things (setting a loading state,
 * returning data, etc.) over and over in your app, a component like this might 
 * make sense to build.
 * 
 * Tip: you can use your browser's dev tools to inspect the full React errors 
 * in the console. Click in the menu bar above the editor to access the real
 * right-click menu, or use your browser's shortcut code to get to the dev tools.
 */

class DataFetcher extends Component {
    state = {
        loading: false,
        data: null
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data: data, loading: false}))
    }
    
    render() {
        return (
            /**
             * Part 1: Figure out what you're returning here. You should pass the 
             * loading state and the data state through to the component needing it.
             * 
             * Remember: the render props pattern allows us to separate the data 
             * and logic (like fetching data and setting the loading state) from 
             * the UI (JSX). Think about which one of those this component is in 
             * charge of. You'll need to pass both pieces of state to whatever 
             * component is making use of the DataFetcher
             * 
             * Also, there's more than one "correct" way to make use of the render
             * props pattern. Check App.js to determine which way it's being implemented
             * in this challenge.
             */
            <div>
                {this.props.children({
                   loading: this.state.loading,
                    data: this.state.data
                })}
            </div>
        )
    }
}

export default DataFetcher