import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/produits";

axios.get(PRODUCT_API_BASE_URL)

.then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      // The server responded with a status code outside the 2xx range
      console.log('Error response:', error.response);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.log('Error message:', error.message);
    }
  });

class ProduitService {
    getProduits() {
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduit(product) {
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProduitById(productId) {
        return axios.get(`${PRODUCT_API_BASE_URL}/${productId}`);
    }

    updateProduit(product, productId) {
        return axios.put(`${PRODUCT_API_BASE_URL}/${productId}`, product);
    }

    deleteProduit(productId) {
        return axios.delete(`${PRODUCT_API_BASE_URL}/${productId}`);
    }
}

export default new ProduitService();

