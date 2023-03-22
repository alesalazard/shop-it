import allProducts from '../useAxios';
import { useState, useEffect } from 'react';
import { CardProducts } from '@/components/cardProduct.jsx';


export default function Home() {

  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect (()=>{
    allProducts(setProducts)
  },[])


  return (
    <>

        
            <section>
              <CardProducts
              allProducts={allProducts}/>

            </section>
            <section>

            </section>
  

        <footer></footer>
        
    
    </>
  )
}
