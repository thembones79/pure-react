import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class Reddit extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({posts});
        });
    }
    render(){
        return (
            <div>
                <h1>/r/reactjs</h1>
                <ul>
                {this.state.posts.map(post => (
                    <li key={post.id}><hr /><h3>{post.author}</h3><div>score: {post.score}</div><a href={post.url}>{post.title}</a></li>
                ))}
                </ul>
            </div>
        );
    }
}





ReactDOM.render(<Reddit/>, document.querySelector('#root'));