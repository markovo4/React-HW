import {useParams} from "react-router-dom";
import {getNotes} from "../../functions/LocalStorage/index.js";
import {Container} from "react-bootstrap";

const SingleNote = () => {
    const DATA_KEY = 'data';

    const index = useParams().noteId;
    const note = getNotes(DATA_KEY)[index];

    return (
        <Container className={'shadow-lg card p-5 d-flex gap-2'}>
            <h3><b>Task:</b> {note.title}</h3>
            <h5><b>Description:</b> {note.subtitle}</h5>
            <h5 style={{color: note.completed ? 'green' : 'red'}}><b>Completed:</b> {`${note.completed}`}</h5>
        </Container>
    )
}
export default SingleNote;