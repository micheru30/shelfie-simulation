import React from 'react';

function Product (props) {
    let {id} = props.product
    return(
        <div className='product'>
            <img className='product-image' src={props.product.image_url} alt='Product'/>
            <div className='product-info'>
            <p className='product-name'>{props.product.name}</p>
            <p className='product-price'>{props.product.price}</p>
            </div>
            <div className='product-button-box'>
            <button onClick={()=>props.handleDelete(id)}>Delete</button>
            <button onClick={()=>props.handleButtonSwitch(id)}>Edit</button>
            </div>
        </div>
    )
}

export default Product;