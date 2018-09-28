import React, { Component } from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                {this.props.inventory.map(product=>(
                    <Product handleButtonSwitch={this.props.handleButtonSwitch}handleDelete={this.props.handleDelete} key={product.id} product={product}/>
                ))}
            </div>
        )
    }
}
