import React from 'react';
import * as S from '../styles/InspectionStyle'

const Clothes = () => {
    return (
        <>
            <S.update>
                [업데이트] 2021/12/06 월
            </S.update>
            <S.update>
                [적용일시] 2021/12/10 금 00:00 체결 건 부터
            </S.update>
            <S.content>
                KREAM의 검수기준은 거래 당사자간 원활한 거래와 보다 균형있는 검수기준 확립을 위해 지속적으로 업데이트 되고 있습니다. 거래에 앞서 최신 검수기준을 참고하시기 바랍니다.
            </S.content>
            <S.content>
                회원님께서 판매 또는 구매하신 모든 상품은 KREAM의 전문 검수팀이 제품의 컨디션을 꼼꼼하게 확인한 후, 검수 합격 시에만 출고하고 있습니다.
            </S.content>
            <S.contentRed>
                ※ 의류 거래 관련 주의사항<br />
                KREAM은 정가품 판정 및 검수기준에 의한 기본 품질 확인을 수행하고 있으나, 통신판매 중개자로서 제조업체의 제품별 보증에 대해서는 책임을 지지 않습니다.
            </S.contentRed>
            <S.contentRed>
                제품 기능에 관한 사항이나 기타 제품 관련 질문은 제조업체에 문의하시기 바랍니다.
                단, 제조업체의 A/S 여부는 보장하지 않습니다. (이용약관 제22조 3항 참고)
            </S.contentRed>
            <S.contentRed>
                KREAM에서 검수를 진행하는 모든 제품은 검수 과정 중 밀봉 및 실링된 포장을 개봉합니다.
            </S.contentRed>
            <S.contentRed>
                판매자 - 판매하신 제품의 검수를 위해 제품의 밀봉 및 실링은 모두 개봉되며 검수 탈락되어 상품이 반송될 경우 포장이 개봉된 상태로 배송됩니다.
            </S.contentRed>
            <S.contentRed>
                구매자 - 검수 진행 중 밀봉 및 실링은 모두 개봉되며, KREAM 패키지로 포장되어 발송해 드립니다.
                * 기존 제품의 오리지널 폴리백의 경우 포함되지 않을 수 있습니다.
            </S.contentRed>
            <S.content>
                KREAM의 검수기준으로 고지된 사항 이외 아래와 같이 제조사에서 불량으로 인정하지 않는 기준, 또는 당사 검수기준에 따라 그 여부를 명확히 분별할 수 없는 상품의 경우 하자로 판단하지 않으며,이로 인한 구매 취소는 불가하므로 신중한 거래 부탁드립니다.
            </S.content>
        </>
    );
};

export default Clothes;