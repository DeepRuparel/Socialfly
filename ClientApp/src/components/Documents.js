import React, { Component, useState } from 'react';
import FileUpload from './FileUpload';
import FileList from './FileList';

export default function Documents() {
    const [files, setFiles] = useState([])

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename))
    }
    return (
        <>
            <div className="title">Upload file</div>
            <FileUpload files={files} setFiles={setFiles}
                removeFile={removeFile} />
            <FileList files={files} removeFile={removeFile} />
        </>
        )
}