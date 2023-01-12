import React from 'react';
import * as Pa from './PaginationStyle';

const Pagination = ({total, limit, page, setPage}) => {
    
    // total 게시물 총 개수 
    // limit 페이지 당 게시물수
    // page 현재 페이지 번호
    const numPages = Math.ceil(total/ limit);
    // 예를 들어 37개라고 하자 37 / 10 = 3.7 나옴 올림 해줘야 총 페이지 개수가 나옴
    
    return (
        <>
            <Pa.Nav>
                <Pa.Btn onClick={() => setPage(page - 1)} disabled={page === 1}>
                    &lt;
                </Pa.Btn>
                {Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <Pa.Btn
                            key={i + 1}
                            onClick={() => setPage(i + 1)}
                            aria-current={page === i + 1 ? 'page' : null}
                        >
                            {i + 1}
                        </Pa.Btn>
                    ))}
                <Pa.Btn
                    onClick={() => setPage(page + 1)}
                    disabled={page === numPages}
                >
                    &gt;
                </Pa.Btn>
            </Pa.Nav>
        </>
    );
};

export default Pagination;