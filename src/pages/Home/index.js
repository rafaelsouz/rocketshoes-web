import React, { useEffect, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { ProductList } from './styles';

function Home({ addToCart }) {
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

  async function handleAddProduct(product) {
    addToCart(product);
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
