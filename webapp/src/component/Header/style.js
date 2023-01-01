import styled from 'styled-components';

export const HeaderWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const Top = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    height: 31px;
    padding: 0 40px;
    border-bottom: 1px solid #ececec;
`;

export const TopWrapper = styled.ul`
    display: flex;
    height: 25px;
    align-items: center;
    gap: 24px;
    color: rgba(34, 34, 34, 0.8);
    font-size: 12px;
`;

export const TopLi = styled.li`
    display: flex;
`;

export const Bottom = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    padding: 0px 40px;
    font-size: 15px;
`;

export const BottomImg = styled.img`
    display: flex;
    width: 115px;
`;

export const BottomWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 40px;
`;

export const BottomLi = styled.li`
    display: flex;
    // color: ${props => (props.active ? 'red' : 'blue')};
    /* img {
        width: 28px;
    } */
`;
