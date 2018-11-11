import React from 'react';
import ReactDOM from 'react-dom';

function Nav({ children }) {
    let items = React.Children.toArray(children);
    for ( let i = items.length - 1; i >= 1; i -- ) {
    items.splice(i, 0,
    <span key={i} className='separator' > | </span>
    );
    }
    return (
    <div> {items} </div>
    );
    }

<Nav>
<NavItem url='/' > Home </NavItem>
<NavItem url='/about' > About </NavItem>
<NavItem url='/contact' > Contact </NavItem>
</Nav>

ReactDOM.render(<Nav/>, document.getElementById('root'));

    