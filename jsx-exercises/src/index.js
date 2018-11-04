import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
    return (
        <div className='book' >
            <div className='title' >
                The



                Title
                </div>
            <div className='author' >
                The Author
                </div>

                <div>
&nbsp;Non-breaking
&nbsp;Spaces&nbsp;
</div>


<div>
Line1
{' '}
Line2
</div>




            <ul className='stats' >
                <li className='rating' >
                    5 stars
                            </li>
                <li className='isbn' >
                    12-3456      78-910
                </li>
            </ul>
        </div>
    );

}

function Greeting() {
    // Try all of these variations:
    let username = "root";
    //let username = undefined;
    //let username = null;
    //let username = false;
    // Fill in the rest:
    return (
        <div>{username ? `Hello, ${username}` : `Not logged in`}</div>
    );
    }

function TestComponent() {
    return(
    

        
    );
}

function Data() {
    return(
        <>
        <td>Adam</td>
        <td>Ula</td>
        <td>Dorcia</td>
        </>
    );
}

ReactDOM.render(<TestComponent />, document.getElementById('root'));
