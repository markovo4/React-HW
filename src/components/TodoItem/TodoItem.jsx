import {Button, Col, Row} from "react-bootstrap";
import {Fragment} from 'react';
import PropTypes from "prop-types";

const TodoItem = ({task, onRemove, id}) => {

    const handleClick = (e) => {
        onRemove(e.target.id);
    }

    return (
        <Fragment>
            <Row>
                <Col className={'col-auto'}>
                    <Button
                        type={'button'}
                        className={'btn btn-primary btn-sm'}
                        onClick={handleClick}
                        id={id}
                    >-</Button>
                </Col>
                <Col>{task}</Col>
            </Row>
            <hr/>
        </Fragment>
    )
}

TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}

export default TodoItem;