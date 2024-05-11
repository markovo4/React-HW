import React from 'react';
import PropTypes from "prop-types";

import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import cn from 'classnames';

export default class Modal extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    constructor(props) {
        super(props);
    }


    render() {
        const modalClassName = cn(
            'modal',
            this.props.isOpen ? 'fade show' : ''
        )

        const styleDisplay = cn(
            this.props.isOpen ? 'block' : 'none'
        )


        const {children} = this.props;
        return (
            <div className={modalClassName} style={{display: styleDisplay}} role={'dialog'}>
                <div className={'modal-dialog'}>
                    <div className={'modal-content'}>{children}</div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    isOpen: PropTypes.bool.isRequired
}