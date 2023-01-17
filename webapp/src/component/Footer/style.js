import styled from 'styled-components';

export const FooterWrapper = styled.div`
    padding: 50px 40px;
    border-top: 1px solid #ebebeb;
`;

export const FooterTopSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const GuideInfo = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    li {
        font-size: 14px;
        letter-spacing: -0.21px;
        color: rgba(34, 34, 34, 0.5);
        strong {
            display: block;
            margin-bottom: 4px;
            color: #222;
            font-size: 16px;
        }
    }
`;

export const TopLeft = styled.div`
    display: flex;
    gap: 80px;
`;

export const TopRight = styled.div`
    strong {
        font-size: 16px;
        letter-spacing: -0.16px;
        font-weight: 700;
        color: #222;
    }
`;

export const TimeInfo = styled.p`
    padding-top: 8px;
    line-height: 20px;
    font-size: 13px;
    letter-spacing: -0.07px;
    color: rgba(34, 34, 34, 0.5);
`;

export const CustomerInfo = styled.p`
    padding-top: 8px;
    font-size: 13px;
    letter-spacing: -0.07px;
    color: #222;
`;

export const FaqButton = styled.button`
    margin-top: 17px;
    border-radius: 0;
    color: #fafafa;
    font-weight: 700;
    background-color: #222;
    width: 96px;
    height: 34px;
    border: none;
`;

export const FooterBottomSection = styled.div`
    margin-top: 56px;
    padding-top: 30px;
    border-top: 1px solid #ebebeb;
`;

export const CorpInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TermInfo = styled.div``;

export const TermInfoList = styled.ul`
    display: flex;
    gap: 20px;

    li {
        font-size: 14px;
        color: #000;
        strong {
            font-weight: 700;
        }
    }
`;

export const BusinnessInfo = styled.ul`
    margin-top: 20px;
    width: 672px;
    li {
        display: inline-block;
        margin-right: 17px;
        line-height: 20px;
        font-size: 13px;
        letter-spacing: -0.07px;
        color: rgba(34, 34, 34, 0.5);
    }
`;

export const BusinnessLink = styled.a`
    margin-left: 4px;
    text-decoration: underline;
`;

export const SnsInfo = styled.ul`
    display: flex;
    gap: 20px;
    li {
        cursor: pointer;
        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

export const NoticeInfo = styled.div`
    padding-top: 40px;
    padding-bottom: 16px;
    font-size: 12px;
    color: #222;
    strong {
        font-weight: 700;
    }
`;

export const NoticeText = styled.p`
    margin-top: 4px;
    font-size: 12px;
    color: rgba(34, 34, 34, 0.5);
`;

export const NoticeLink = styled.a`
    margin-left: 4px;
    text-decoration: underline;
`;

export const NoticeArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Copyright = styled.p`
    font-size: 12px;
    color: rgba(34, 34, 34, 0.3);
`;
