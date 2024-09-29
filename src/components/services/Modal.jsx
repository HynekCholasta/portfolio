// Modal.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HiX } from 'react-icons/hi';
import './services.css'; // Ensure you have the necessary styles

export default function Modal({ open, children, onClose }) {
    // Close modal on Escape key press
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        if (open) {
            document.addEventListener('keydown', handleEsc);
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [open, onClose]);

    if (!open) return null;

    return ReactDOM.createPortal(
        <div className='overlay' onClick={onClose} aria-modal="true" role="dialog">
            <div 
                className="services__modal active-modal" 
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <div className="services__modal-content">
                    <HiX 
                        onClick={onClose} 
                        className="services__modal-close" 
                        aria-label="Close Modal"
                    />
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('portal') // The portal element in index.html
    );
}
