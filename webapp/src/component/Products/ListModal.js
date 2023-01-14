import axios from "axios";
import React from 'react';
import { useEffect, useState } from 'react';
import * as S from './style';

const ListModal = ({ setModalOpen, completedOrderForm, sellBidsListForm, buyBidsListForm, form, mainImg, sizeForm, open6, open7, open8, seq 
                     , getSize, getAll, size, listOpen, setListOpen}) => {


    const [open1, setOpen1] = useState(open6)
    const [open2, setOpen2] = useState(open7)
    const [open3, setOpen3] = useState(open8)

    const onOpen2 = (e) => {
        if(e.target.name == 6) {setOpen1(true); setOpen2(false); setOpen3(false);}
        else if(e.target.name == 7) {setOpen2(true); setOpen1(false); setOpen3(false);}
        else if(e.target.name == 8) {setOpen3(true); setOpen1(false); setOpen2(false);}
     }

    const time = (a) => {
        var date = new Date(a)
        var b = date.getFullYear() + "/" + date.getMonth()+1 + "/" + date.getDate()
        return b
    }

    return (
        <S.Container>
            <S.LayerContainer>
                <S.Close onClick={e => setModalOpen(false)}>
                    X
                </S.Close>
                <S.LayerHeader>
                    <S.LayerHeaderTitle>
                        <span>시세</span>
                    </S.LayerHeaderTitle>
                </S.LayerHeader>
                <S.LayerMarketPriceLayerContent>
                    <S.BuyProduct>
                        <S.BuyProductProduct>
                            <S.BuyProductProductImg>
                                <img src={`/resellList/${mainImg}`} width="80px" height="80px"/>
                            </S.BuyProductProductImg>
                        </S.BuyProductProduct>
                        <S.BuyInfo>
                            <S.ModelInfo>
                                <S.ModelTitle>{form.title}</S.ModelTitle>
                                <S.ModelKo>{form.subTitle}</S.ModelKo>
                                <S.SizeSelectWrap>
                                    <S.BtnSize>
                                        <S.BtnSizeSize onClick={() => setListOpen(!listOpen)}>{size}</S.BtnSizeSize>
                                        <S.PriceLayerSizeListLayer listOpen={listOpen}>
                                            <S.PriceLayerContainer>
                                                <S.LayerSizeListBtnLayerClose></S.LayerSizeListBtnLayerClose>
                                                <S.SizeList>
                                                    <S.SizeItem >
                                                        <S.SizeLink size={size} itemSize='모든 사이즈' onClick={() => getAll(seq)}>
                                                            모든 사이즈
                                                        </S.SizeLink>
                                                    </S.SizeItem>
                                                    {
                                                        sizeForm.map((item, index) => (
                                                        <S.SizeItem key={index}>
                                                            <S.SizeLink size={size} itemSize={item.size} onClick={() => getSize(seq, item.size)}>
                                                                {item.size}
                                                            </S.SizeLink>
                                                        </S.SizeItem>))
                                                    }
                                                </S.SizeList>
                                            </S.PriceLayerContainer>
                                        </S.PriceLayerSizeListLayer>
                                    </S.BtnSize>
                                </S.SizeSelectWrap>
                            </S.ModelInfo>
                        </S.BuyInfo>

                    </S.BuyProduct>
                    <S.TabInfo>
                        
                        <S.LayerContentTabArea>
                            <S.LayerContentTabList>
                                <S.TabAreaItem>
                                    <S.TabAreaItemLink onClick={ onOpen2 } open={ open1 } name='6'>체결 거래</S.TabAreaItemLink>
                                </S.TabAreaItem>
                                <S.TabAreaItem>
                                    <S.TabAreaItemLink onClick={ onOpen2 } open={ open2 } name='7'>판매 입찰</S.TabAreaItemLink>
                                </S.TabAreaItem>
                                <S.TabAreaItem>
                                    <S.TabAreaItemLink onClick={ onOpen2 } open={ open3 } name='8'>구매 입찰</S.TabAreaItemLink>
                                </S.TabAreaItem>
                            </S.LayerContentTabList>
                            <S.LayerPriceTabContent open={ open1 }>
                               <S.LayerPriceTable>
                                <S.LayerMarketPriceTable>
                                    <S.PriceHead>
                                        <S.HeadBox>
                                            <S.HeadSort1>
                                                <S.SortLinkSort>
                                                    <span className='sort_txt'>사이즈</span>
                                                </S.SortLinkSort>
                                            </S.HeadSort1>
                                            <S.HeadSort2>
                                                <S.SortLinkSort>
                                                    <span className='sort_txt'>거래가</span>
                                                </S.SortLinkSort>
                                            </S.HeadSort2>
                                            <S.HeadSort3>
                                                <S.SortLinkSort>
                                                    <span className='sort_txt'>거래일</span>
                                                </S.SortLinkSort>
                                            </S.HeadSort3>
                                        </S.HeadBox>
                                    </S.PriceHead>
                                    <S.PriceBody>
                                        {
                                            completedOrderForm.map((item, index) => (
                                                <S.BodyList key={index}>
                                                    <S.ListText1>{item.size}</S.ListText1>
                                                    <S.ListText2>{item.price.toLocaleString('ko-KR')+'원'}</S.ListText2>
                                                    <S.ListText3>{time(item.tradeDate)}</S.ListText3>
                                                </S.BodyList>
                                            ))
                                        }
                                    </S.PriceBody>
                                </S.LayerMarketPriceTable>
                               </S.LayerPriceTable>
                            </S.LayerPriceTabContent>
                            <S.LayerPriceTabContent open={ open2 }>
                               <S.LayerPriceTable>
                                <S.LayerMarketPriceTable>
                                    <S.PriceHead>
                                        <S.HeadBox>
                                            <S.HeadSort1>
                                                <S.SortLinkSort>
                                                    <span className='sort_txt'>사이즈</span>
                                                </S.SortLinkSort>
                                            </S.HeadSort1>
                                            <S.HeadSort2>
                                                <S.SortLinkSort>
                                                    <span className='sort_txt'>판매희망가</span>
                                                </S.SortLinkSort>
                                            </S.HeadSort2>
                                            <S.HeadSort3>
                                                <S.SortLinkSort>
                                                    <span className='sort_txt'>수량</span>
                                                </S.SortLinkSort>
                                            </S.HeadSort3>
                                        </S.HeadBox>
                                    </S.PriceHead>
                                    <S.PriceBody>
                                        {
                                            sellBidsListForm.map((item, index) => (
                                                <S.BodyList key={index}>
                                                    <S.ListText1>{item.size}</S.ListText1>
                                                    <S.ListText2>{item.price.toLocaleString('ko-KR')+'원'}</S.ListText2>
                                                    <S.ListText3>{item.count}</S.ListText3>
                                                </S.BodyList>
                                            ))
                                        }
                                    </S.PriceBody>
                                </S.LayerMarketPriceTable>
                               </S.LayerPriceTable>
                            </S.LayerPriceTabContent>
                            <S.LayerPriceTabContent open={ open3 }>
                               <S.LayerPriceTable>
                                <S.LayerMarketPriceTable>
                                    <S.PriceHead>
                                        <S.HeadBox>
                                            <S.HeadSort1>
                                                <S.SortLinkSort>
                                                    <span className='sort_txt'>사이즈</span>
                                                </S.SortLinkSort>
                                            </S.HeadSort1>
                                            <S.HeadSort2>
                                                <S.SortLinkSort>
                                                    <span className='sort_txt'>구매희망가</span>
                                                </S.SortLinkSort>
                                            </S.HeadSort2>
                                            <S.HeadSort3>
                                                <S.SortLinkSort>
                                                    <span className='sort_txt'>수량</span>
                                                </S.SortLinkSort>
                                            </S.HeadSort3>
                                        </S.HeadBox>
                                    </S.PriceHead>
                                    <S.PriceBody>
                                        {
                                            buyBidsListForm.map((item, index) => (
                                                <S.BodyList key={index}>
                                                    <S.ListText1>{item.size}</S.ListText1>
                                                    <S.ListText2>{item.price.toLocaleString('ko-KR')+'원'}</S.ListText2>
                                                    <S.ListText3>{item.count}</S.ListText3>
                                                </S.BodyList>
                                            ))
                                        }
                                    </S.PriceBody>
                                </S.LayerMarketPriceTable>
                               </S.LayerPriceTable>
                            </S.LayerPriceTabContent>
                            
                        </S.LayerContentTabArea>
                    </S.TabInfo>
                </S.LayerMarketPriceLayerContent>
            </S.LayerContainer>
        </S.Container>
    );
};

export default ListModal;