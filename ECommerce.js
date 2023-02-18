import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 7.99,
      image: "https://via.placeholder.com/150",
    },
  ]);
  
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <div className="app">
      <header>
        <h1>E-Commerce App</h1>
        <div className="cart">
          <span>Cart ({cart.length})</span>
        </div>
      </header>
      <main>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
