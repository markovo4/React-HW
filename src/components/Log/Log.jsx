import {Component} from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from "prop-types";

class Log extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id)
    }

    render() {
        const {data, id} = this.props
        return (
            <Button variant="list-group-item list-group-item-action" onClick={this.handleDelete} id={id}>{data}</Button>
        )
    }
}

Log.propTypes = {
    data: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Log;