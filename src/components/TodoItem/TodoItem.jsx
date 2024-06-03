import {Button, Card, Container} from "react-bootstrap";
import PropTypes from "prop-types";
import {useState} from "react";

const TodoItem = ({title, subtitle, id, onDelete}) => {
    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check)
    }
    const handleClick = (e) => {
        onDelete(e.target.id)
    }
    return (
        <Card className={'gap-2 p-3 shadow-sm'} style={{border: '1px solid rgba(1, 1, 1, 0.1)'}}>
            <Card.Title>{check ? <s>{title}</s> : title}</Card.Title>
            <Card.Subtitle>{check ? <s>{subtitle}</s> : subtitle}</Card.Subtitle>
            <hr/>
            <Container className={'d-flex justify-content-between gap-3'}>
                <input
                    type={'checkbox'}
                    className={'btn-check'}
                    autoComplete={'off'}
                    onClick={handleCheck}
                    id={id}
                />
                <label
                    className={'btn btn-outline-warning'}
                    htmlFor={id}
                >Completed</label>
                <Button
                    className={'btn-danger'}
                    id={id}
                    onClick={handleClick}
                >Delete</Button>
            </Container>

        </Card>
    )
}

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default TodoItem;