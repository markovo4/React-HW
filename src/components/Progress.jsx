import React from 'react';

import '/node_modules/bootstrap/dist/css/bootstrap.css';

class Progress extends React.Component {
    render() {
        const {percentage} = this.props;
        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin={percentage}
                     aria-valuemax="100" aria-label="progressbar" style={{width: percentage + '%'}}>
                </div>
            </div>
        );
    }
}

export default Progress;