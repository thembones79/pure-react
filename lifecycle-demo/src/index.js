import React from 'react';
import ReactDOM from 'react-dom';

class ErrorCatcher extends React.Component {
    state = { error: null }

    componentDidCatch(error, info) {
        console.log('[componentDidCatch]', error);
        this.setState({error: info.componentStack});
    }

    render() {
        if(this.setState.error) {
            return (
                <div>
                    An error occurred: {this.stste.error}
                </div>
            );
        }
        return this.props.children;
    }
}

class LifecycleDemo extends React.Component {
    state = {counter: 0};

    constructor(props) {
        super(props);
        console.log('[constructor]');
        console.log(' State already set:', this.state);
    }

    componentDidMount() {
        console.log('[componentDidMount]', 'Mounted');
    }

    static getDerivedSateFromProps(nextProps, prevState) {
        console.log('[getDerivedStateFromProps]');
        console.log(' Next props:', nextProps);
        console.log(' Prev state:', prevState);
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]', 'Deciding to update');
        return true;
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[getSnapshotBeforeUpdate]', 'About to update...');
        return `Time is ${Date.now()}`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[componentDidUpdate]', 'Updated.');
        console.log(' snapshot:', snapshot)
    }

    componentWillUnmount(){
        console.log('{componentWillUnmout]', 'Goodbye cruel world.');
    }
}

