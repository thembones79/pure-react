import React from 'react';
import ReactDOM from 'react-dom';


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
    return (       
            <table>
                <tbody>
                    <tr>
                        <Data />
                    </tr>
                </tbody>
            </table>
    );
}

function Data() {
    return (
        <>
            <td>Adam</td>
            <td>Ula</td>
            <td>Dorcia</td>
            <td><Greeting/></td>
        </>
    );
}

ReactDOM.render(<TestComponent />, document.getElementById('root'));
