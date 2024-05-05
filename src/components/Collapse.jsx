import React from 'react';
import cn from 'classnames';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.opened,
        }
    }

    isOpened = () => {
        this.setState(({opened: !this.state.opened}))
    }

    render() {

        const isShow = cn(
            'collapse',
            this.state.opened ? 'show' : ''
        )

        const isExpanded = cn(
            this.state.opened ? 'true' : 'false'
        )


        const {text} = this.props;
        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
                       aria-expanded={isExpanded} onClick={this.isOpened}>Link with href</a>
                </p>
                <div className={isShow}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        )
    }
}

Collapse.defaultProps = {
    text: 'collapse me',
    opened: true
}


export default Collapse;