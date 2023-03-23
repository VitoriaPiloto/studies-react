import React, {Component} from "react"

// HOC é uma função que tem um componente como parâmetro e retorna um novo componente englobando (wrapping) o componente e lhe fornecendo super poderes. Dá a ele habilidades extras 

class Toggler extends Component{
    state = {
        on: this.props.defaultOnValue
    }
    
    toggle = () => {
        this.setState(prevState => {
            return{
                on: !prevState.on
            }
        })
    }
    
    render (){
        //Irá retornar uma nova instância do componente passado assim que a função withToggler for chamada.
        const Component = this.props.component
        return(
            <Component on={this.state.on} toggle={this.toggle} {...this.props}/>
        )
    } 
}

export function withToggler(component, optionsObj){
    return function(props){
        return (
            <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props} />
        )
    }
} 
