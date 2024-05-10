import PropTypes from "prop-types";

const Footer = ({children}) => {
    return (
        <div className={'modal-footer'}>{children}</div>
    )
}

export default Footer;

Footer.propTypes = {
    children: PropTypes.any.isRequired,
}