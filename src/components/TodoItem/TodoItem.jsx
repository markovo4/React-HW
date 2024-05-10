import {Component, Fragment} from "react";
import {Button} from 'react-bootstrap'
import PropTypes from "prop-types";

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (e) => {
        this.props.onRemove(e.target.id)
    }

    render() {
        const {task, id} = this.props;
        return (
            <Fragment>
                <div className={'row'}>
                    <div className={'col-auto'}>
                        <Button
                            type={'button'}
                            variant={'btn btn-outline-danger btn-sm'}
                            id={id}
                            onClick={this.handleDelete}
                        >-
                        </Button>
                    </div>
                    <div className={'col'}>{task}</div>
                </div>
                <hr/>
            </Fragment>
        )
    }
}

TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default TodoItem;