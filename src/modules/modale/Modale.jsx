import Modal from 'react-modal';
import xMark from './assets/xmark.svg';

function ModalUtils({ isOpen, onRequestClose }) {
    return (
        <div>
            {/* Modal component for displaying information */}
            <Modal
                isOpen={isOpen} // Controls if the modal is open
                onRequestClose={onRequestClose} // Function to call when the modal needs to close
                contentLabel="New Employee" // Accessibility label
                className="Modal" // CSS class for styling
                overlayClassName="Overlay" // CSS class for overlay back styling
            >
                Employee created! {/* Message displayed */}
                <button onClick={onRequestClose} className="close-button">
                    <img src={xMark} alt="Close" /> {/* Close icon */}
                </button>
            </Modal>
        </div>
    );
}
export default ModalUtils;
