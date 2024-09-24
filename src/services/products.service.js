import axios from 'axios';

export async function getAllProducts() {
    return axios.get('https://dummyjson.com/products');
};

// USEEFFECT---> hook que nos sirve para ejecutar acciones asegurando 
//que el componente este renderizado(DOM) <----
//   PRODUCTOS ===> ENDPOINT==> HOST/CASA: 'https://dummyjson.com'
// para llamar utilizamos axios;
// 'https://dummyjson.com/products'

