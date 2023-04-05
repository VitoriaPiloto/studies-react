import React from "react"
import product from "/productsData.js"

function Products() {    
    const pArray = product.map(item => ( 
        <>
            <div id="product-div">
                <img src={item.img}/>                
                <div id="product-description">
                    <h2>{item.name} -- R${item.price},00</h2>
                    <h4>{item.description}</h4>
                </div>
            </div>            
            <br/>
        </>
    ))  
    return (
        <>
            <h1>Products Page</h1>
            {pArray}
        </>
    )
}

export default Products