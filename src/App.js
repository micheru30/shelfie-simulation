import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedProduct: null,
      baseUrl: 'http://localhost:4000',
      inventory: []
    }
    this.addProduct = this.addProduct.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handledelete = this.handledelete.bind(this)
    this.handleButtonSwitch = this.handleButtonSwitch.bind(this)
  }
  componentDidMount() {
    axios.get(`${this.state.baseUrl}/api/inventory`)
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
  }
  addProduct(name, price, image_url) {
    axios.post(`${this.state.baseUrl}/api/inventory`, { name, price, image_url })
  }
  handledelete(id){
    axios.delete(`${this.state.baseUrl}/api/inventory/${id}`)
  }
  handleButtonSwitch(id){
    this.setState({
      selectedProduct: id
    })
  }
  // handleEdit(name,price,image_url){
  //   axios.put()
  // }
  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Header />
        <Form selectedProduct={this.state.selectedProduct} addProduct={this.addProduct} />
        <Dashboard handleButtonSwitch={this.handleButtonSwitch} handleDelete={this.handledelete} inventory={this.state.inventory} />
      </div>
    );
  }
}

export default App;
