import React from 'react';
import Modal from './Modal.js';

const PrivacyModal = ({ onClose }) => {
    return (
        <Modal onClose={ onClose }>
            <h2>개인정보 수집 및 이용 동의</h2>
            <br/>

            <p>크림(주)(이하 회사)는 서비스 제공을 위하여 아래와 같이 개인정보를 수집 ・ 이용 및 제공합니다.</p>
            <br/>

            <img src="/image/table.png" width='520px'></img>

            <p>
            개인정보의 수집 및 이용에 대한 동의를 거부하시더라도 서비스의 이용은 가능합니다.
            </p>
        </Modal>
    );
};

export default PrivacyModal;