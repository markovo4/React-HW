import PropTypes from "prop-types";
import {Component} from 'react';
import Body from "./Body.jsx";
import Title from "./Title.jsx";
import Text from "./Text.jsx";


class Card extends Component {
    static Title = Title;
    static Body = Body;
    static Text = Text;

    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return <div className={'card'}>{children}</div>
    }
}

Card.propTypes = {
    children: PropTypes.any.isRequired
}
export default Card;