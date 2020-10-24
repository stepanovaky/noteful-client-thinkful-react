import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        errorMessage: ''
    }

    static getDerivedStateFromError(error) {
        return { errorMessage: error.toString() }
    }

    componentDidCatch(error, info) {
        this.logErrorToMyService(error.toString(), info);
    }

    render() {
        if (this.state.error) {
            return <p>Something broke</p>
        }
        return this.props.children;
    }

}

export default ErrorBoundary;