import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NoteContext from './NoteContext';


function DeleteNote(props) {
    const history = useHistory();

    const noteData = useContext(NoteContext);

    const { noteId } = props;

    const deleteData = async (noteId) => {
        const settings = {
            method: 'DELETE'
        }

        try {
        const deleted = await fetch(`http://localhost:9090/notes/${noteId}`, settings);
        } catch(err) {
            alert(err)
        }
        const newNoteList = noteData.filter(note => note.id !== noteId)
        props.setNotes(newNoteList);
       
        
       
    }


    return(
        <button type="button" className="delete side" onClick={() => deleteData(noteId)}><Link to="/">Remove</Link></button>
    )
}

export default DeleteNote;