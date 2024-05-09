import {Component} from 'react';
import {Button} from 'react-bootstrap';

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

export default Log;