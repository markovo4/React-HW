import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import cn from 'classnames';

class BtnGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            primary: false
        };
    }

    onChangeClass = () => {
        this.setState(({primary}) => ({primary: !primary, active: primary}));
    }

    render() {

        const btnClassLeft = cn(
            'btn',
            this.state.primary ? 'btn-primary' : 'btn-secondary'
        )
        const btnClassRight = cn(
            'btn',
            this.state.active ? 'btn-primary' : 'btn-secondary'
        )

        return (
            <div className="btn-group" role="group">
                <button type="button" className={btnClassLeft} onClick={this.onChangeClass}>Left</button>
                <button type="button" className={btnClassRight} onClick={this.onChangeClass}>Right</button>
            </div>
        )
    }
}

export default BtnGroup;