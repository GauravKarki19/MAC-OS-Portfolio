import React from 'react'
import MacWindow from './MacWindow'
import './Resume.scss'

const Resume = () => {
  return (
    <div>
      <MacWindow>
        <div className="resume-window">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
      </MacWindow>
    </div>
  )
}

export default Resume
