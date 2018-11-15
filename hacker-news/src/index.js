import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const ListOfStories = () => (
    <table>
        <tbody>
            <tr>
                <td>
                    Navigation
                </td>
            </tr>
            <tr>
                <td>
                    Stories
                </td>
            </tr>
        </tbody>
    </table>
);

ReactDOM.render(<ListOfStories/>,document.querySelector('#root'));