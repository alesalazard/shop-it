import allProducts from '../useAxios';
import { useState, useEffect } from 'react';
import { CardProducts } from '@/components/cardProduct';


export default function Home() {

  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect (()=>{
    allProducts(setProducts)
  },[])


  return (
    <>

        
            <section>
              <CardProducts/>

            </section>
            <section>

            </section>
  

        <footer></footer>
        
    
    </>
  )
}
