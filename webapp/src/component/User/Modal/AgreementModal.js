import Modal from './Modal.js';
import React from 'react';

const AgreementModal = ({ onClose }) => {
    return (
        <Modal onClose={ onClose }>
            <h2>이용약관 동의</h2>
        </Modal>
    );
};

export default AgreementModal;