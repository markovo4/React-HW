import {getNotes} from "../LocalStorage/index.js";
import {Link} from "react-router-dom";
import React from "react";

const Nav = () => {
    const DATA_KEY = 'data';

    const notes = getNotes(DATA_KEY)
    return (
        <React.Fragment>
            <nav>
                <Link to={'/'}>Home Page</Link>

                <Link to={'/notes'}>Notes</Link>
                
                {notes.map((note, index) => {
                    return (<Link
                        key={index}
                        to={`/notes/${note.itemId}`}
                    >{index}</Link>)
                })}
            </nav>
        </React.Fragment>
    )
}

export default Nav;