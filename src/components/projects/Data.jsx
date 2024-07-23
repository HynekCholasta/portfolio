import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";
import "../../assets/threads-bot.JPG";


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
        image: require("../../assets/threads-bot.JPG").default,
        title: "Meta threads bot",
        category: "B",
        modalContent: 'This is the content for Project 2'
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