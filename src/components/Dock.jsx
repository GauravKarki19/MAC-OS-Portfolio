import React from 'react';
import "./Dock.scss";

const Dock = () => {
  return (
    <div>
      <footer className='dock'>
        <div className="icon github"><img src="../../public/docs-icon/github.svg" alt="" /></div>
        <div className="icon note"><img src="../../public/docs-icon/note.svg" alt="" /></div>
        <div className="icon pdf"><img src="../../public/docs-icon/pdf.svg" alt="" /></div>
        <div className="icon calender"><img src="../../public/docs-icon/calender.svg" alt="" /></div>
        <div className="icon link"><img src="../../public/docs-icon/link.svg" alt="" /></div>
        <div className="icon mail"><img src="../../public/docs-icon/mail.svg" alt="" /></div>
        <div className="icon spotify"><img src="../../public/docs-icon/spotify.svg" alt="" /></div>
        <div className="icon cli"><img src="../../public/docs-icon/cli.svg" alt="" /></div>
      </footer>
    </div>
  )
}

export default Dock;
