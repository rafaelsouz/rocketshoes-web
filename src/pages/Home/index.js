import React, { useEffect, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import { ProductList } from './styles';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then((response) => {
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    });
  }, []);

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button">
            <div>
              <MdShoppingBasket size={16} color="#fff" />3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

export default Home;
