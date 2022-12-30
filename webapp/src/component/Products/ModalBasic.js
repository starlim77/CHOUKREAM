import * as S from './style';

function ModalBasic({ setModalOpen }) {
    // 모달 끄기 

    return (
        <S.Container>
            <S.Close onClick={ e => setModalOpen(false)}>
                X
            </S.Close>
            <h2>상품 특이 사항</h2>
            <div class="content">

            </div>
        </S.Container>
    );
}
export default ModalBasic;