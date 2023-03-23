import { allProducts } from "../useAxios";
import { useState, useEffect } from "react";
import { CardProducts } from "@/components/cardProduct.jsx";
import Header from "@/components/header";
// import Footer from "@/components/footer";
// import app from '../styles.app.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    allProducts(setProducts);
  }, []);

  return (
    <>
      <Header />
      <h1>Productos</h1>
      <section className="products">
        {products.map((prod) => (
          <article key={prod.id} className='productCard'>
            <img alt='product' src={prod.images[0]} className="imgProduct"></img>
            <h1>{prod.title}</h1>
            <p>{prod.description}</p>
            <p>{prod.price}</p>
          </article>
        ))}
      </section>
      <section></section>

      
      {/* <style jsx>{`
      .products{
        display: flex;
        flex: columns;
        width: 240vh;

      }
        .productCard {
          margin: 20px;
          width: 200px;
          height: 240px;
          text-align: center;
          background-color: white;
        }
        .imgProduct {
          width: 190px;
        }
        .productCard h1 {
          font-weight: bold;
        }
      `}</style> */}
    </>
  );
}
