import Project1 from "../../assets/project1.webp";
// import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";
import threadsBotImg from './threads-bot.JPG';
// import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';


export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: "Project 1",
        category: "A",
        modalContent: 'This is the content for Project 1'
    },
    {
        id: 2,
        image: threadsBotImg,
        title: 'Meta Threads Bot',
        category: 'B',
        modalContent: {
            header: 'Automation Project for Threads Application',
            description: `
                <p>Developed an automation tool that logs into the Threads application, generates content using AI, and posts it automatically. This tool is currently used to post quotes.</p>
                <p><strong>Technologies Used:</strong></p>
                <ul>
                    <li><strong>Node.js:</strong> For backend scripting and automation logic.</li>
                    <li><strong>Puppeteer:</strong> To handle the web automation tasks such as logging in and posting.</li>
                    <li><strong>OpenAI API:</strong> To generate the content for posts.</li>
                </ul>
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>
                    Automated login to the Threads application</li>
                    <li>AI-generated content creation.</li>
                    <li>Scheduled posting of quotes.</li>
                </ul>
            `
        }
    },
    {
        id: 3,
        image: Project3,
        title: "Project 3",
        category: "C",
        modalContent: 'This is the content for Project 3'
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "A",
    },
    {
        name: "B",
    },
    {
        name: "C",
    },
];