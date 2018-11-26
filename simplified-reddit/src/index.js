import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Reddit extends React.Component {
    state = {
        posts: []
    }
    render(){
        return (
            <div>
                <h1>/r/reactjs</h1>
            </div>
        );
    }
}





ReactDOM.render(<Reddit/>, document.querySelector('#root'));