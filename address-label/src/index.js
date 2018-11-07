import React from 'react';
import ReactDOM from 'react-dom';

const AddressLabel = ({theMan}) => (
    <div className="address-label">
        <p>{theMan.name}</p>
        <p>{theMan.address}</p>
        <p>{theMan.city}, {theMan.state} {theMan.zip}</p>
    </div>
);

var person = {
    name: "Full Name",
    address: "123 Fake St.",
    city: "Boston",
    state: "MA",
    zip: "02118",
    country: "USA"
};

ReactDOM.render(<AddressLabel theMan={person}/>, document.querySelector('#root'));