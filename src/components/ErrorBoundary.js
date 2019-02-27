import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false,
        }
    }

    render() { 
        if (this.state.hasError) {
            return <h1>Error Page Loading!!! </h1>
        } else {
            return this.props.children
        }
    }
}
 
export default ErrorBoundary;
