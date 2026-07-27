import React from 'react'
import githubData from '../../assets/github.json'
import MacWindow from './MacWindow'
import './Github.scss';

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tag: [], repoLink: "", demoLink: "" } }) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <div className="tags">
            {
                data.tags.map((tag, index) => <p key={`${data.id}-${tag}-${index}`} className='tag'>{tag}</p>)
            }
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Live Demo</a>}
        </div>

    </div>
}

const Github = ({ windowName, setWindowState }) => {
    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState}>
            <div className="cards">
                {githubData.map(project => {
                    return <GitCard key={project.id} data={project} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github
