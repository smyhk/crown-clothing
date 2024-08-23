import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import './category-page.styles.scss';

const CategorPage = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  // console.log(products);

  // Only update when categories or categoriesMap has changed
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  // console.log(products);
  return (
    <div className="category-page-container">
      {products &&
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default CategorPage;
