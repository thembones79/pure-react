import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const CreditCard = ({cardInfo}) => (
    <div>
        Bank name,
        Credit card number,
        Four digits, VALID THRU, Expiration date
        Person name
    </div>
)

ReactDOM.render(<CreditCard />, document.querySelector('#root'));