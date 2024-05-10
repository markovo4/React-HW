import PropTypes from "prop-types";

const Header = ({children}) => {
    return (
        <div className={'modal-header'}>
            <div className={'modal-title'}>{children}</div>
            <button type={'button'} className={'btn-close'} data-bs-dismiss={'modal'} aria-label={'Close'}></button>
        </div>
    )
}

export default Header;

Header.propTypes = {
    children: PropTypes.any.isRequired,
}