import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css'

function CartPage({items}) {
    return (
        <ul className="CartPage-items">
            {items.map(item =>
            <li key={item.id} className="CartPage-item">
                <Item item={item}/>
            </li>
            )}
        </ul>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isReuired
};

export default CartPage;