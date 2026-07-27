import React from 'react'
import MacWindow from './MacWindow'
import './Resume.scss'

const Resume = ({ windowName, setWindowState }) => {
  return (
    <div>
      <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="resume-window">
          <embed src="/resume.pdf" frameBorder="0"></embed>
        </div>
      </MacWindow>
    </div>
  )
}

export default Resume
