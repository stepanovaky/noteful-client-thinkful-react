
import React from 'react';
import uuid from 'react-uuid';
import './AddFolder.css';

function AddFolder(props) {

 


    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newFolder = {
            id: uuid(),
            name: event.target['folder-name'].value
        }

        if (event.target['folder-name'].value == null) {
            alert('This field must be filled to submit')
        }

        
try {
        const addFolder = await fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFolder)
        })
    } catch(err) {
        alert(err)
    }

        return addFolder;

    }

       

    return(
        <form className="add-folder" onSubmit={handleSubmit}  >
            <label>
                Add Folder:
                <input type="text" name="folder-name" />
            </label>
            <button type="submit" value="submit" >Submit</button>
        </form>
    )
}

export default AddFolder;