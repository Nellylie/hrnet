import Modal from 'react-modal';
import xMark from './assets/xmark.svg';

function ModalUtils({ isOpen, onRequestClose, formData }) {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="New Employee"
                className="Modal"
                overlayClassName="Overlay"
            >
                Employee created!
                <button onClick={onRequestClose} className="close-button">
                    <img src={xMark} alt="Close" />
                </button>
            </Modal>
        </div>
    );
}
export default ModalUtils;
