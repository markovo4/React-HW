import PropTypes from "prop-types";

const Header = ({toggle, children}) => {

    const handleClick = function () {
        toggle()
    }

    return (
        <div className={'modal-header'}>
            <div className={'modal-title'}>{children}</div>
            <button type={'button'} className={'btn-close'} data-bs-dismiss={'modal'} aria-label={'Close'}
                    onClick={handleClick}></button>
        </div>
    )
}

export default Header;

Header.propTypes = {
    children: PropTypes.any.isRequired,
    toggle: PropTypes.func.isRequired
}