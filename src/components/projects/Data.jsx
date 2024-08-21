// import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";
import threadsBotImg from './threads-bot.JPG';
import hjmediaImg from '../../assets/RE_photo_website.JPG';
// import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';


export const projectsData = [
    {
        id: 1,
        image: hjmediaImg,
        title: "Real Estate Photography Website",
        category: "A",
        modalContent: {
            header: 'Real Estate Photography Website',
            description: `
                <p>Created a dynamic and visually appealing website for a real estate photography agency I am part of, showcasing our portfolio and services. The site features a responsive design, ensuring a seamless experience across all devices, and leverages modern web technologies to deliver high performance and user engagement.</p>
                
                <p><strong>Technologies Used:</strong></p>
                <ul>
                    <li><strong>React:</strong> For building a responsive and interactive user interface.</li>
                    <li><strong>TailwindCSS:</strong> For crafting a modern and customizable design with utility-first CSS.</li>
                    <li><strong>Docker:</strong> To containerize the application for consistent deployment and scalability.</li>
                    <li><strong>GitHub Pages:</strong> For hosting the website with continuous deployment and version control.</li>
                </ul>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>Elegant and responsive design tailored for showcasing real estate photography.</li>
                    <li>Efficient use of React and TailwindCSS for a fast and visually appealing user experience.</li>
                    <li>Seamless deployment process with Docker and GitHub Pages, ensuring reliable hosting and updates.</li>
                </ul>
                <p>Check out the live website <a href="https://hynekcholasta.github.io/re_photo_website/" target="_blank" rel="noopener noreferrer">here</a>.</p>
            `
        }
    },
    {
        id: 2,
        image: threadsBotImg,
        title: 'Automation Project for Threads Application',
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