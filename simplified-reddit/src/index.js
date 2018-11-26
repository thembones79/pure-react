import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class Reddit extends React.Component {
    state = {
        posts: []
    }
    render(){
        return (
            <div>
                <h1>/r/reactjs</h1>
                <ul>
                {this.state.posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
                </ul>
            </div>
        );
    }
}





ReactDOM.render(<Reddit/>, document.querySelector('#root'));