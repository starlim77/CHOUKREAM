import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useReducer, useState } from 'react';
import Abuse from './policies/Abuse';
import Fake from './policies/Fake';
import Panalty from './policies/Panalty';
import * as M from './styles/ModalStyle';
import * as S from './styles/PolicyStyle'


const Policy = ({ onPolicyClose }) => {
    const [isOpen, setIsOpen] = useState(false)
    const initialState = {
        text: "",
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "POLICY":
                setIsOpen(!isOpen)
                return { text: action.text }
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <M.Bg onClick={onPolicyClose}></M.Bg>
            <M.Popup>
                <M.Header>
                    <M.HeaderDiv>
                        이용 정책
                    </M.HeaderDiv>
                    <M.CloseX className='closex' style={{ cursor: "pointer" }} onClick={onPolicyClose}>X</M.CloseX>
                </M.Header>
                <M.Scroll>
                    <M.BodyDiv>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "PENALTY" })}>
                                페널티 정책
                                <div>
                                    {
                                        state.text === "PENALTY" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "PENALTY" && isOpen ? <Panalty /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "FAKE" })}>
                                가품 ・ 손상/오염/사용감 있는 상품 판매에 대한 제재
                                <div>
                                    {
                                        state.text === "FAKE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "FAKE" && isOpen ? <Fake /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            검수 기준 악용에 대한 제재
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            거래 실패 시 반송 운임 기준
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            부적절행위 금지
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            이상시세 입찰/거래 취소 정책
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            커뮤니티 가이드라인
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            검수센터 입고 지원 정책
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            배송 사고 보상 프로세스
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            세금계산서 관련 안내
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            세무 관련 유의사항
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                        <S.DropDown>
                            <S.DropDownHead onClick={() => dispatch({ type: "POLICY", text: "ABUSE" })}>
                            이용 제한 정책
                                <div>
                                    {
                                        state.text === "ABUSE" && isOpen ?
                                            <S.arrowImg src="../../image/product/angle-up-solid.svg" /> :
                                            <S.arrowImg src="../../image/product/angle-down-solid.svg" />
                                    }
                                </div>
                            </S.DropDownHead>
                            {state.text === "ABUSE" && isOpen ? <Abuse /> : false}
                        </S.DropDown>
                    </M.BodyDiv>
                </M.Scroll>
            </M.Popup>
            정책
        </div>
    );
};

export default Policy;