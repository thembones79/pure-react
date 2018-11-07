import React from 'react';
import ReactDOM from 'react-dom';

const AddressLabel = ({ person }) => (
    <div className="address-label">
        <p>{person.name}</p>
        <p>{person.address}</p>
        <p>{person.city}, {person.state} {person.zip}</p>
    </div>
);

const Sender = ({sender}) => (
    <div className="sender"><AddressLabel person={sender}/></div>
);

const Receiver = ({receiver}) => (
    <div className="receiver"><AddressLabel person={receiver}/></div>
);

const Envelope = ({ from, to, stampUrl }) => (
    <div className="envelope">
        <Sender sender={from}/>
        <Receiver receiver={to}/>
        <img className="stamp" src={stampUrl} alt="stamp" />
    </div>
);

var sender = {
    name: "Mr. Sender",
    address: "123 Fake St.",
    city: "Boston",
    state: "MA",
    zip: "02118"
};

var receiver = {
    name: "Mrs. Receiver",
    address: "123 Fake St.",
    city: "San Francisco",
    state: "CA",
    zip: "94101"
};

var url = "https://i2.wp.com/freepngimages.com/wp-content/uploads/2017/01/George-Washington-1908-Two-Cents-stamp.png";

ReactDOM.render(<Envelope
    from={sender}
    to={receiver}
    stampUrl={url}
/>, document.querySelector('#root'));