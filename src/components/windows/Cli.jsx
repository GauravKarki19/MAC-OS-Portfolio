import React from 'react';
import MacWindow from './MacWindow';
import TerminalModule from 'react-console-emulator';
import './Cli.scss';

const Terminal = TerminalModule.default;

const Cli = () => {
    const commands = {
        about: {
            description: 'Show a short intro about the portfolio owner.',
            usage: 'about',
            fn: () => 'Hi! I am Gaurav Karki, a frontend developer building modern and creative web experiences.'
        },
        skills: {
            description: 'Show my core skills.',
            usage: 'skills',
            fn: () => 'React, Vite, JavaScript, SCSS, UI/UX, Frontend Development, Portfolio Design'
        },
        projects: {
            description: 'Show featured projects.',
            usage: 'projects',
            fn: () => 'MacOS Portfolio · GitHub Explorer · Resume Viewer · Note App'
        },
        experience: {
            description: 'Show work experience.',
            usage: 'experience',
            fn: () => 'Frontend Developer | 3+ years creating modern, interactive web experiences.'
        },
        contact: {
            description: 'Show contact information.',
            usage: 'contact',
            fn: () => 'Email: gaurav@example.com\nGitHub: github.com/gauravkarki\nLinkedIn: linkedin.com/in/gauravkarki'
        },
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    };

    return (
        <MacWindow>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={`╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
• about     - Learn about me
• skills    - View my technical skills
• projects  - Check out my work
• experience - See my career history
• contact   - Get in touch

Happy exploring! 🚀`}
                    promptLabel="gauravkarki:~$"
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    );
};

export default Cli;