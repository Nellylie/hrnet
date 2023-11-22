import Modal from 'react-modal';

function ModalUtils({ isOpen, onRequestClose, formData }){
    console.log(formData.formData.firstName);
    const firstName = JSON.stringify(formData.formData.firstName);
    const lastName = JSON.stringify(formData.formData.lastName);
    const dateOfBirth = JSON.stringify(formData.formData.dateOfBirth);
    const dateStart = JSON.stringify(formData.formData.dateStart);
    const address = JSON.stringify(formData.formData.address);

    
    if (!formData) {
        return null;
    }
    return (
        <div>
            <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Le nouvel employé a été créé 
            "
        >
            <h2>Le nouvel employé a été créé </h2>
            <div>Prénom: {firstName}</div>
            <div>Nom: {lastName}</div>
            <div>dateOfBirth: {dateOfBirth}</div>
            <div>dateStart: {dateStart}</div>
            <div>address: {address}</div>

            <button onClick={onRequestClose}>Fermer</button>
        </Modal>
        </div>
    );
};

export default ModalUtils;
