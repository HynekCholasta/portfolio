// ServicesSection.jsx
import React, { useState } from 'react';
import './services.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle } from 'react-icons/hi';
import Modal from './Modal'; // Ensure correct path
import { services } from './servicesData'; // Import the services data

export default function ServicesSection() {
    // State to track which modal is open; null means no modal is open
    const [activeModal, setActiveModal] = useState(null);

    // Function to handle opening a modal
    const openModal = (id) => {
        setActiveModal(id);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <section className='service__section' id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Create + Collaborate</span>
            <div className="services__container container grid">
                {services.map(service => (
                    <div key={service.id} className="services__content">
                        <div className="services__icon-container">
                            <HiOutlineClipboardList className="services__icon" />
                            <h3 className="services__title">
                                {service.title.split(' ').map((word, index) => (
                                    <React.Fragment key={index}>
                                        {word}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </h3>
                        </div>
                        <button 
                            className="services__button" 
                            onClick={() => openModal(service.id)}
                        >
                            View More
                            <HiOutlineArrowSmRight className="services__button-icon" />
                        </button>
                        
                        {/* Render Modal if this service is active */}
                        {activeModal === service.id && (
                            <Modal open={true} onClose={closeModal}>
                                <h3 id="modal-title" className="services__modal-title">{service.title}</h3>
                                <p className="services__modal-description">
                                    {service.description}
                                </p>
                                <ul className="services__modal-services grid">
                                    {service.services.map((item, index) => (
                                        <li key={index} className="services__modal-service">
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </Modal>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
