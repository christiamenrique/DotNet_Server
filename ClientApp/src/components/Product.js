import React, { Component } from 'react';
import axios from "axios";
import '../App.css';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { products: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(products) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            {/* <th>Img</th> */}
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(forecast =>
            <tr key={forecast.id}>
              <td>{forecast.id}</td>
              <td>{forecast.product_name}</td>
              <td>{forecast.typeOfproduct}</td>
              <td>{forecast.product_description}</td>
              <td>${forecast.prices}</td>
              <td>{forecast.quantity}</td>
              <td>
              <a className="edit btn btn-success" href={"/crud"}>edit</a>  
              <a className="delete btn btn-danger" href="/fetch-data" onClick={() => { axios.delete(`/api/Product/${forecast.id}`) }}>delete</a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.products);

    return (
      <div>
        <h1 id="tabelLabel" >Products</h1>
        <p>All products avaible</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('api/Product');
    const data = await response.json();
    this.setState({ products: data, loading: false });
  }
}
