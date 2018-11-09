import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


const CreditCard = ({ information }) => (
    <div className="credit-card">
        <div className="bank-name">{information.bankName}</div>
        <div className="card-number">{information.cardNumber}</div>
        <div className="theThirdRow">
            <div className="four-digits">{getDigits(information.cardNumber)}</div>
            <div className="valid-thru">valid thru</div>
            <div className="exp-date">{information.expDate}</div>
        </div>
        <div className="person-name">{information.personName}</div>
    </div>
)

var cardInfo = {
    bankName: "Big Bank, Inc.",
    cardNumber: "1234 5678 8765 4321",
    expDate: "09/19",
    personName: "Cardholder Name"
};

function getDigits(cardNumberString) {
    var fourDigits = cardNumberString.slice(0, 4);
    return (
        fourDigits
    );
}

ReactDOM.render(<CreditCard information={cardInfo} />, document.querySelector('#root'));