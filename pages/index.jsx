import { allProducts } from "../useAxios";
import { useState, useEffect } from "react";
import { CardProducts } from "@/components/cardProduct.jsx";
import Header from "@/components/header";
import Footer from "@/components/footer";
//import '../styles/app.css'

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    allProducts(setProducts);
  }, []);

  return (
    <>
      <Header />

      <section>
        <h1>Productos</h1>
        {products.map((prod) => (
          <article key={prod.id} className='productCard'>
            <img alt='' src={prod.images[0]}></img>
            <h1>{prod.title}</h1>
            <p>{prod.description}</p>
            <p>{prod.price}</p>
          </article>
        ))}
      </section>
      <section></section>

      <Footer />
      <style jsx>{`
        .productCard {
          display: flex;
          flex: grid;
          width: 120px;
          height: 240px;
          text-align: center;
          background-color: white;
        }

        .productCard h1 {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}