import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getNotes} from "../LocalStorage";
import PageNoteFound from "../../routes/PageNotFound";

const Nav = () => {
    const DATA_KEY = 'data';
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = () => {
            setNotes(getNotes(DATA_KEY));
        }
        const intervalId = setInterval(() => {
            fetchNotes();
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <React.Fragment>
            <nav className={'d-flex gap-4 bg-dark p-3 shadow-lg'}>
                <Link className={'nav-links'} to={'/'}>Home Page</Link> ||
                {notes.map((note, index) => (
                    <Link className={'nav-links'} key={index} to={`/notes/${index}`}>
                        Task: {note.title}
                    </Link>
                ))}

                <Link to={'*'} element={<PageNoteFound/>}/>
            </nav>
        </React.Fragment>
    );
}

export default Nav;
