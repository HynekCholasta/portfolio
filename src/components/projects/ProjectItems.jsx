import { HiOutlineArrowSmRight } from 'react-icons/hi';
import './ProjectItems.css';

const ProjectItems = ({ item, isModalOpen, toggleModal }) => {
    return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt={item.title} />
            <h3 className="project__title">{item.title}</h3>
            <button onClick={toggleModal} className="project__button">
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </button>
            {isModalOpen && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{item.modalContent.header}</h2>
                        <div dangerouslySetInnerHTML={{ __html: item.modalContent.description }} />
                        {item.modalContent.features && (
                            <ul>
                                {item.modalContent.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        )}
                        <button className="close-modal" onClick={toggleModal}>CLOSE</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectItems;
