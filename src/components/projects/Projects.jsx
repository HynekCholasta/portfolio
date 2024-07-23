import React, { useEffect, useState } from 'react';
import { projectsData } from "./Data";
import { projectsNav } from './Data';
import ProjectItems from "./ProjectItems";

const Projects = () => {
    const [item, setItem] = useState({ name: "All" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [modals, setModals] = useState([]);

    useEffect(() => {
        if (item.name === "All") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    useEffect(() => {
        setModals(new Array(projects.length).fill(false));
    }, [projects]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    const toggleModal = (index) => {
        const newModals = [...modals];
        newModals[index] = !newModals[index];
        setModals(newModals);
    };

    return (
        <div>
            <div className="project__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => handleClick(e, index)}
                            className={`${active === index ? 'active-project' : ''} project__item`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>
            <div className="project__container container grid">
                {projects.map((item, index) => {
                    return (
                        <ProjectItems
                            item={item}
                            key={item.id}
                            isModalOpen={modals[index]}
                            toggleModal={() => toggleModal(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
