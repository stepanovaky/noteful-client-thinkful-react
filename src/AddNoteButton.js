import React from 'react';
import { Link } from 'react-router-dom';
import './AddNoteButton.css';

function AddNoteButton() {
    return(<Link to="/addnote"><button id="add-button" type="button" value="add-note">New Note</button></Link>  )
}

export default AddNoteButton;