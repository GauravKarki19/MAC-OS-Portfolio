import React from 'react';
import "./Dock.scss";

// Dock component renders the bottom MacOS-style icon bar.
// Each icon can open a separate window or trigger an external link.
const Dock = ({ windowState, setWindowState }) => {
  return (
    <div>
      <footer className='dock'>
        {/* GitHub icon: opens the GitHub window */}
        <div
          onClick={() => {
            setWindowState(state => ({ ...state, github: true }))
          }}
          className="icon github">
          <img src="../../public/docs-icon/github.svg" alt="GitHub" />
        </div>

        {/* Note icon: opens the note window */}
        <div
          onClick={() => {
            setWindowState(state => ({ ...state, note: true }))
          }}
          className="icon note">
          <img src="../../public/docs-icon/note.svg" alt="Note" />
        </div>

        {/* Resume icon: opens the resume window */}
        <div
          onClick={() => {
            setWindowState(state => ({ ...state, resume: true }))
          }}
          className="icon pdf">
          <img src="../../public/docs-icon/pdf.svg" alt="Resume" />
        </div>

        {/* Calendar icon: decorative dock icon */}
        <div 
        onClick={() => {
            window.open('https://calendar.google.com/', "_blank")
          }}
        className="icon calender">
          <img src="../../public/docs-icon/calender.svg" alt="Calendar" />
        </div>

        {/* LinkedIn icon: opens the LinkedIn profile in a new tab */}
        <div
          onClick={() => {
            window.open('https://www.linkedin.com/in/gaurav-karki-full-stack-developer/', "_blank")
          }}
          className="icon link">
          <img src="../../public/docs-icon/link.svg" alt="LinkedIn" />
        </div>

        {/* Mail icon: currently decorative */}
        <div
          onClick={() => {
            window.open('mailto:gauravkarki0045@gmail.com', "_blank")
          }}
          className="icon mail">
          <img src="../../public/docs-icon/mail.svg" alt="Mail" />
        </div>

        {/* Spotify icon: currently decorative */}
        <div className="icon spotify">
          <img src="../../public/docs-icon/spotify.svg" alt="Spotify" />
        </div>

        {/* CLI icon: opens the terminal window */}
        <div
          onClick={() => {
            setWindowState(state => ({ ...state, cli: true }))
          }}
          className="icon cli">
          <img src="../../public/docs-icon/cli.svg" alt="CLI" />
        </div>
      </footer>
    </div>
  )
}

export default Dock;
