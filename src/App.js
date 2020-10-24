import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import RenderFolder from './RenderFolder';
import RenderNote from './RenderNote';
import Main from './Main';
import { FolderProvider } from './FolderContext';
import { NoteProvider } from './NoteContext';
import Nav from './Nav';
import './All.css';
import AddNote from './AddNote';
import ErrorBoundary from './ErrorBoundary';
import PropTypes from 'prop-types';

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const [notes, setNotes] = useState([]);
  const [folders, setFolders] = useState([])

const fetchData = async () => {

  try {
  const foldersData = await fetch('http://localhost:9090/folders');
  const folderItems = await foldersData.json();
  } catch(err) {
    alert(err)
  }
  try {
  const notesData = await fetch('http://localhost:9090/notes');
  const notesItems = await notesData.json();

  } catch(err) {
    alert(err)
  }
  setNotes(notesItems);
  setFolders(folderItems);
}

  return (
    <div className="App">
      <NoteProvider value={notes}>
        <FolderProvider value={folders}>
          <ErrorBoundary>
          <Nav />
          <Route exact path="/" render={props => <Main setNotes={setNotes} />} />
          <Route path="/folder/:id" render={props => <RenderFolder setNotes={setNotes} />} />
          <Route path="/note/:id" render={props => <RenderNote setNotes={setNotes} />} />
          <Route path="/addnote" render={props=> <AddNote setNotes={setNotes} />} />
          </ErrorBoundary>
        </FolderProvider>

      </NoteProvider>
      
    </div>
  );
}

setNotes.propTypes = {
  value: propTypes.array
}

export default App;
