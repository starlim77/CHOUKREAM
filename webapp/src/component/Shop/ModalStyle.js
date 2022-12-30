import styled from 'styled-components';

export const Modal = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
`;
export const ModalButton = styled.button`
    outline: none;
    cursor: pointer;
    border: solid 1px rebeccapurple;
`;
export const ModalSection = styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
`;
export const ModalSectionHeader = styled.header`
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
`;
export const ModalSectionHeaderBtn = styled.header`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
`;

export const ModalSectionMain = styled.main`
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
`;
export const ModalSectionFooter = styled.footer`
    padding: 12px 16px;
    text-align: right;
`;
export const ModalSectionFooterBtn = styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
`;
export const ModalOpenModal = styled.div`
    display: flex;
    align-items: center;
`;


// 여기서 부터 

export const SortingList = styled.ul`
    overflow: hidden;
    position: absolute;
    top: 28px;
    right: 0;
    width: 278px;
    background-color: #fff;
    border: 1px solid #ebebeb;
    -webkit-box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
    z-index: 10;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;
export const SortingItem = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: list-item;
`;

export const SortingLink = styled.a`
    position: relative;
    display: block;
    padding: 12px 36px 12px 16px;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;
export const SortingDesc = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    cursor: pointer;
`;
export const MainDesc = styled.p`
    color: #222;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.21px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;
export const SubDesc = styled.p`
    padding-top: 4px;
    font-size: 12px;
    letter-spacing: -0.06px;
    color: rgba(34, 34, 34, 0.5);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;
// export const = styled.`
    
// `;
// export const = styled.`
    
// `;
