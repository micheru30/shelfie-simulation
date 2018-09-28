import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: '',
            productName: '',
            productPrice: '',
            selectedProduct: this.props.selectedProduct,
        }
        this.handleCancel = this.handleCancel.bind(this)
    }
    handleImgUrl(e){
        this.setState({
            imageUrl: e.target.value
        })
    }
    handleProductName(e){
        this.setState({
            productName: e.target.value
        })
    }
    handleProductPrice(e){
        this.setState({
            productPrice: e.target.value
        })
    }
    handleCancel(){
        this.setState({
            imageUrl: '',
            productName: '',
            productPrice: '',
        })
    }
    componentDidUpdate(){

    }
    render() {
        const edit = this.state.selectedProduct;
        let editButton = edit === null ? editButton = <button onClick={()=>this.props.addProduct(this.state.productName,this.state.productPrice,this.state.imageUrl)}>Add to inventory</button> : editButton = <button>Edit</button>;
        return (
            <div>
                <h1>Form</h1>
                <img href={`${this.state.imageUrl}`} alt='Preview'/>
                <h3>Image URL:</h3>
                <input value={this.state.imageUrl} onChange={(e)=>this.handleImgUrl(e)}/>
                <h3>Product Name:</h3>
                <input value={this.state.productName} onChange={e=>this.handleProductName(e)} />
                <h3>Price:</h3>
                <input value={this.state.productPrice} onChange={e=>this.handleProductPrice(e)}/>
                <button onClick={this.handleCancel}>Cancel</button>
                {editButton}
            </div>
        )
    }
}