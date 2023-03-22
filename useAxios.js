import axios from 'axios';

const url = 'https://dummyjson.com/products'

const allProducts = async (state) => {
    const petition = await axios.get(url);
    state(petition.data.products);
}

const getProduct = async (state, id) => {
    const petition = await axios.get(`https://dummyjson.com/products/${id}`);
    state(petition);
}

export {allProducts, getProduct};
