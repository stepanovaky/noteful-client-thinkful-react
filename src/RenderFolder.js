import React, { useState, useEffect, useContext } from 'react';
import FolderContext from './FolderContext';
import NoteContext from './NoteContext';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import './All.css';
import './RenderFolder.css';
import DeleteNote from './DeleteNote';


function RenderFolder(props) {

    const [ folder, setFolder ] = useState([]);
    const [ notes, setNotes ] = useState([]);
    const folderData = useContext(FolderContext);
    const noteData = useContext(NoteContext);
    
    
    const folderId = props.match.params.id;
   
    
    useEffect(() => {
        const findFolder = folderData.find(folder => folder.id === folderId);
        const findNotes = noteData.filter(note => note.folderid === folderId)
        
        setNotes(findNotes);
        
        setFolder(findFolder);
        
    }, [folderData])


    return(
        <div className="main-folder-notes">
            <h2 className="main-folders-nav">{folder ? folder.name:'Loading ...'}</h2>
    <ul className="main-notes-nav">{notes.map(note =><li key={note.id}><Link to={`/note/${note.id}`} >{note.name}</Link><span className="date"> Modified <Moment format="Do MMM YYYY">{note.modified}</Moment></span><DeleteNote setNotes={props.setNotes} noteId={note.id} /></li> )}</ul>
        
        </div>
    )
}




export default RenderFolder;