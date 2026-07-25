import React, { useState } from 'react'
import MacWindow from './MacWindow';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Note.scss';
import noteText from '../../assets/note.txt?raw';

const Note = () => {
    const [markdown] = useState(noteText);

    return (
        <MacWindow>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>
    )
}

export default Note
