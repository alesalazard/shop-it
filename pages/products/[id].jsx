import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { getProduct } from '../../useAxios';

function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState()
  
  useEffect(()=>{
    if(id) {
        getProduct(setProduct, id)
    }
  },[id])

  useEffect(()=>{
    console.log(product)
  },[product])

  return(
    <>
        <div>{product && product.data.title}</div>
    </>
  )
}

export default Product
