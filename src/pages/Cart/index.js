import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/02/HZM-3549-002/HZM-3549-002_zoom1.jpg?ts=1584657883&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/02/HZM-3549-002/HZM-3549-002_zoom1.jpg?ts=1584657883&?ims=1088x"
                alt=""
              />
            </td>

            <td>
              <strong>Tênis Nike Downshifter</strong>
              <span>R$129,90</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} />
                </button>
              </div>
            </td>

            <td>
              <strong>R$258,80</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
