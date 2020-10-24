
import React, { useContext } from 'react';
import uuid from 'react-uuid';
import FolderContext from './FolderContext';
import NoteContext from './NoteContext';
import { useHistory } from 'react-router-dom';
import './AddNote.css';


function AddNote(props) {
    const history = useHistory();
    const noteData = useContext(NoteContext);
    const folderData = useContext(FolderContext);
    

    const folderList = folderData.map(folder => <option value={folder.id} key={folder.id} name="folder-id">{folder.name}</option>)

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newNote = {
            id: uuid(),
            name: event.target['note-name'].value, 
            modified: new Date(),
            content: event.target['note-content'].value,
            folderid: event.target['folders'].value
        }

        if (event.target['note-name'].value == null || event.target['note-content'].value == null) {
            alert('Both fields must be filled to submit')
        }
        props.setNotes(noteData.concat(newNote))
        
        try {
        const addNote = await fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
    } catch(err) {
        alert (err)
    }

        history.push('/')

        

        return addNote;

    }

    return(
        <form className="add-note" onSubmit={handleSubmit}   >
            
            <label>
                Name:
                <input type="text" name="note-name" />
            </label>
            <label>
                Folder:
            <select name="folders" id="folders">
                
                {folderList}
                
                
            </select>
            </label>
            <label>
                Content:
                <input id="large-box" type="text" name="note-content" />
            </label>
            <button type="submit" value="submit">Submit</button>
        </form>
    )
}

export default AddNote;