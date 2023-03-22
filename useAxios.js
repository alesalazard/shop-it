import axios from 'axios';

const url = 'https://dummyjson.com/products'

const allProducts = async (state) => {
    const petition = await axios.get(url);
    state(petition.data.products);
}
export default allProducts;
