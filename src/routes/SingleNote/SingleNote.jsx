import {useParams} from "react-router-dom";
import {getNotes} from "../../components/LocalStorage/index.js";
import {Container} from "react-bootstrap";

const SingleNote = () => {
    const DATA_KEY = 'data';

    const index = useParams().noteId;
    const note = getNotes(DATA_KEY)[index];

    return (
        <Container className={'shadow-lg card p-5 d-flex gap-2'}>
            <h2>Task: {note.title}</h2>
            <h3>Description: {note.subtitle}</h3>
            <h3>Completed: {`${note.completed}`}</h3>
        </Container>
    )
}
export default SingleNote;