import React, { useState, useEffect } from "react";
import axios from "axios";

function Product()  {
  const [products, setProducts] = useState([]);
  const [id, setID] = useState([]);
  const [product_name, setName] = useState([]);
  const [prices, setPrice] = useState([]);
  const [typeOfproduct, setType] = useState([]);
  const [product_description, setDescr] = useState([]);
  const [quantity, setQuantity] = useState([]);


  useEffect(() => {
    axios
      .get("/api/products")
      .then(({ data }) => setProducts(data))
      .catch(err => console.log(err));
  }, []);
  

  const handleCreate = () => {
    axios
      .post("/add/products", {
        ProductName: product_name,
        ProductPrice: prices,
        ProductType: typeOfproduct,
        ProductDescription: product_description,
        ProductQuantity: quantity,
      })
      .catch(err => console.log(err));

  };

  const handleUpdate = () => {
    const url = `/update/products/${id}`;
    axios
      .put(url, {
        productId: parseInt(id),
        ProductName: product_name,
        ProductPrice: prices,
        ProductType: typeOfproduct,
        ProductDescription: product_description,
        ProductQuantity: quantity,      
      })
      .catch(err => console.log(err));
  };

  const handleDelete = () => {
    axios.delete(`/delete/products/${id}`);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <p key={product.productId}>
          id: {product.productId} name:{product.productName}
        </p>
      ))}

      <h2>Create</h2>
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

      <button onClick={handleCreate}>Create</button>

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
      <button onClick={handleUpdate}>Update</button>

      <h2>Delete</h2>
      <label>Id:</label>
      <input onChange={e => setID(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Product;
