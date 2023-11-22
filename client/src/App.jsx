import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import UpvoteLink from './sharedComponents/upvoteLink/UpvoteLink.jsx';
// import RatingsReviews from './widgets/RatingsReviews/RatingsReviews.jsx';
import FiveStars from './sharedComponents/fiveStars/FiveStars.jsx';
import Questions from './Questions.jsx';

function App() {

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productReviews, setProductReviews] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
      headers: {
        'Authorization': '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'
      }
    })
    .then((response) => {
      setProducts(response.data);
      //set current product to first product in array
      setCurrentProduct(response.data[0]);
    })
    .catch((err) => {
      console.log('error fetching products', err);
    })
  }

  const getReviews = () => {
    setIsLoading(true);
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${currentProduct.id}`, {
      headers: {
        'Authorization': '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'
      }
    })
    .then((response) => {
      setProductReviews(response.data);
    })
    .catch((err) => {
      console.log('error fetching product reviews', err);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    if (currentProduct && currentProduct.id) {
      getReviews();
    }
  }, [currentProduct]);

  if (isLoading) {
    return <div>
      Loading...
    </div>
  }
  return (
    <div>
      <h1 data-testid="app-hw" className={styles.ugly}>
        Pirates of the query-bbean
      </h1>
      {/* <RatingsReviews productReviews={productReviews} /> */}
      <Questions />
    </div>
  );
}

export default App;
