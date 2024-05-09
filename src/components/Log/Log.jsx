import {Component} from 'react';
import {Button} from 'react-bootstrap';

class Log extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (e) => {
        const array = this.props.components;
        const element = array[e.target.id];
        const index = array.indexOf(element)
        array.splice(index, 1)
    }


    render() {
        const {data, id} = this.props
        return (
            <Button variant="list-group-item list-group-item-action" onClick={this.handleDelete} id={id}>{data}</Button>
        )
    }
}

export default Log;