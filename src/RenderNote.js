import React, { useState, useEffect, useContext } from 'react';
import FolderContext from './FolderContext';
import NoteContext from './NoteContext';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import './All.css';
import DeleteNote from './DeleteNote';
import ErrorBoundary from './ErrorBoundary';
import PropTypes from 'prop-types';


function RenderNote(props) {

    const noteData = useContext(NoteContext);
    const folderData = useContext(FolderContext);

    const [ note, setNote ] = useState();
    const [ folder, setFolder ] = useState();

    const noteId = props.match.params.id;

    useEffect(() => {
        retrieveData();

    }, []);

    const retrieveData = () => {
        const foundNote = noteData.find(note => note.id === noteId)
        setNote(foundNote);

        const foundFolder = folderData.find(folder => foundNote.folderid === folder.id);
        setFolder(foundFolder);

    }



    return (
        <div className="one-note">
            <h2><Link to={`/folder/${folder ? folder.id:null}`}>{folder ? folder.name:'Loading ...'}</Link></h2>
            <h3><Link to={`/note/${note ? note.id:null}`}>{note ? note.name:'Loading ...'}</Link></h3>
            <h4>Modified <Moment format="Do MMM YYYY">{note ? note.modified:'Loading...'}</Moment> </h4>
            <p>{note ? note.content:'Loading ...'}</p>
            <ErrorBoundary>
            <DeleteNote setNotes={props.setNotes} noteId={note ? note.id:null} />
            </ErrorBoundary>
            
        </div>
    )
   
}

setNotes.propTypes = {
    value: PropTypes.array
}

export default RenderNote;