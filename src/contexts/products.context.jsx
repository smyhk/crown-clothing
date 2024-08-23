import { createContext, useState, useEffect } from 'react';

// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Add categoried and associated data to firesore - only run once!
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // });

  useEffect(() => {
    async function getCategories() {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    }

    getCategories();
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
