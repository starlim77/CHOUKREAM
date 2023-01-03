import React from 'react';
import Modal from './Modal.js';

const PrivacyModal = ({ onClose }) => {
    return (
        <Modal onClose={ onClose }>
            <h2>개인정보 수집 및 이용 동의</h2>
        </Modal>
    );
};

export default PrivacyModal;