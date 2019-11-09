import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css'

function Crod()  {
  const [products, setProducts] = useState([]);
  const [id, setID] = useState([]);
  const [product_name, setName] = useState([]);
  const [prices, setPrice] = useState([]);
  const [typeOfproduct, setType] = useState([]);
  const [product_description, setDescr] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [img, setImg] = useState([]);


  useEffect(() => {
    axios
      .get("/api/Product")
      .then(({ data }) => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  console.log(useEffect)
  

  const handleCreate = () => {
    axios
      .post("/api/Product", {
        img: parseInt(img),
        product_name: product_name,
        prices: parseInt(prices),
        typeOfproduct: typeOfproduct,
        product_description: product_description,
        quantity: parseInt(quantity),
      })
      .catch(err => console.log(err));
  };

  const handleUpdate = () => {
    const url = `/api/Product/${id}`;
    axios
      .put(url, {
        id: parseInt(id),
        img: parseInt(img),
        product_name: product_name,
        prices: parseInt(prices),
        typeOfproduct: typeOfproduct,
        product_description: product_description,
        quantity: parseInt(quantity),      
      })
      .catch(err => console.log(err));
  };

  // const handleDelete = () => {
  //   axios.delete(`/api/Product/${id}`);
  // };

  return (
    <div className="centering">
      {/* <h2>Products</h2>
      {products.map(product => (
        <p key={product.id}>
          id: {product.id} name:{product.product_name}
        </p>
      ))} */}
  <div className="create">
      <h2>Create</h2>
      {/* <label>Image URL</label>
      <input onChange={e => setImg(e.target.value)} /> */}
      <label>Name:</label>
      <input onChange={e => setName(e.target.value)} />
      <label>Price:</label>
      <input onChange={e => setPrice(e.target.value)} />
      <label>Type:</label>
      <input onChange={e => setType(e.target.value)} />
      <label>Description:</label>
      <input onChange={e => setDescr(e.target.value)} />
      <label>Quantity:</label>
      <input onChange={e => setQuantity(e.target.value)} />

      <button className="btn btn-primary" onClick={handleCreate}>Create</button>
      </div>
      <div className="update">
      <h2>Update</h2>
      <label>Id:</label>
      <input onChange={e => setID(e.target.value)} />
      <label>Name:</label>
      <input onChange={e => setName(e.target.value)} />
      <label>Price:</label>
      <input onChange={e => setPrice(e.target.value)} />
      <label>Type:</label>
      <input onChange={e => setType(e.target.value)} />
      <label>Description:</label>
      <input onChange={e => setDescr(e.target.value)} />
      <label>Quantity:</label>
      <input onChange={e => setQuantity(e.target.value)} />
      <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
      </div>

      {/* <h2>Delete</h2>
      <label>Id:</label>
      <input onChange={e => setID(e.target.value)} />
      <button onClick={handleDelete}>Delete</button> */}
    </div>
  );
};

export default Crod;
