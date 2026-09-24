import { useState, useEffect, useMemo } from "react";
import Productcart from "../components/Productcart";
import "./Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong while loading products.");
        setLoading(false);
      });
  }, []);

  const filteredProduct = useMemo(() => {
    return products.filter((product) => product.price < 150);
  }, [products]);

  if (loading) {
    return (
      <div className="product-message">
        <div className="loader"></div>
        <h2>Loading products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-message">
        <h2>⚠️ {error}</h2>
      </div>
    );
  }

  return (
    <main className="products-page">

      <div className="products-header">
        <div>
          <span>OUR COLLECTION</span>

          <h1>Discover Products</h1>

          <p>
            Find something you love from our collection.
          </p>
        </div>

        <div className="product-count">
          {filteredProduct.length} Products
        </div>
      </div>

      <div className="products-grid">
        {filteredProduct.map((product) => (
          <Productcart
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

    </main>
  );
}