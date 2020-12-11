import React from "react";
import * as CurrencyFormat from 'react-currency-format';

import "./Subtotal.styles.css";

import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
        <>
            <p>
              {/* Part of the homework */}
              Subtotal (
              {basket.length} items): <strong>{getBasketTotal(basket)}$</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;