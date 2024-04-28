import '/node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';

class Alert extends React.Component {
    render() {
        const {type, text} = this.props;
        
        return (
            <div className={'alert alert-' + type} role="alert">{text}</div>
        )
    }
}

export default Alert;