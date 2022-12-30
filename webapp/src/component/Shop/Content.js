import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import * as Co from './ContentStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const Content = ({ dummy, setDummy, modalOpen, openModal, closeModal }) => {
    
    // 3자리마다 콤마 넣어서 문자열로 변환
    const addComma = num => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원';
    };
    const followCalc = (num) => {
        if (num < 10000) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } else {
            return num/10000+'만';
        }     
    }
    
    return (
        <>
            {/* Content */}
            <Co.Content>
                <Co.SearchFilter>
                    <Co.FilterStatus>
                        <Co.StatusBox>
                            <Co.StatusTxt>필터</Co.StatusTxt>
                        </Co.StatusBox>
                    </Co.FilterStatus>
                    <Co.FilterList>
                        <Co.FilterTitle>
                            <Co.TitleBox>
                                <Co.MainTitle>카테고리</Co.MainTitle>
                                <Co.Placeholder>모든 카테고리</Co.Placeholder>
                            </Co.TitleBox>
                            <Co.IcoBox>
                                <FontAwesomeIcon icon={faPlus} />
                            </Co.IcoBox>
                        </Co.FilterTitle>
                    </Co.FilterList>
                    <Co.FilterList>
                        <Co.FilterTitle>
                            <Co.TitleBox>
                                <Co.MainTitle>브랜드</Co.MainTitle>
                                <Co.Placeholder>모든 브랜드</Co.Placeholder>
                            </Co.TitleBox>
                            <Co.IcoBox>
                                <FontAwesomeIcon icon={faPlus} />
                            </Co.IcoBox>
                        </Co.FilterTitle>
                    </Co.FilterList>
                    <Co.FilterList>
                        <Co.FilterTitle>
                            <Co.TitleBox>
                                <Co.MainTitle>성별</Co.MainTitle>
                                <Co.Placeholder>모든 성별</Co.Placeholder>
                            </Co.TitleBox>
                            <Co.IcoBox>
                                <FontAwesomeIcon icon={faPlus} />
                            </Co.IcoBox>
                        </Co.FilterTitle>
                    </Co.FilterList>
                    <Co.FilterList>
                        <Co.FilterTitle>
                            <Co.TitleBox>
                                <Co.MainTitle>컬렉션</Co.MainTitle>
                                <Co.Placeholder>모든 컬렉션</Co.Placeholder>
                            </Co.TitleBox>
                            <Co.IcoBox>
                                <FontAwesomeIcon icon={faPlus} />
                            </Co.IcoBox>
                        </Co.FilterTitle>
                    </Co.FilterList>
                    <Co.FilterList>
                        <Co.FilterTitle>
                            <Co.TitleBox>
                                <Co.MainTitle>신발 사이즈</Co.MainTitle>
                                <Co.Placeholder>모든 사이즈</Co.Placeholder>
                            </Co.TitleBox>
                            <Co.IcoBox>
                                <FontAwesomeIcon icon={faPlus} />
                            </Co.IcoBox>
                        </Co.FilterTitle>
                    </Co.FilterList>
                    <Co.FilterList>
                        <Co.FilterTitle>
                            <Co.TitleBox>
                                <Co.MainTitle>의류 사이즈</Co.MainTitle>
                                <Co.Placeholder>모든 사이즈</Co.Placeholder>
                            </Co.TitleBox>
                            <Co.IcoBox>
                                <FontAwesomeIcon icon={faPlus} />
                            </Co.IcoBox>
                        </Co.FilterTitle>
                    </Co.FilterList>
                    <Co.FilterList>
                        <Co.FilterTitle>
                            <Co.TitleBox>
                                <Co.MainTitle>가격</Co.MainTitle>
                                <Co.Placeholder>모든 가격</Co.Placeholder>
                            </Co.TitleBox>
                            <Co.IcoBox>
                                <FontAwesomeIcon icon={faPlus} />
                            </Co.IcoBox>
                        </Co.FilterTitle>
                    </Co.FilterList>
                </Co.SearchFilter>
                <Co.SearchContent>
                    <Co.SearchOption>
                        <Co.FilterBtns>
                            <Co.FilterExpress>
                                <Co.ExpressBtn>
                                    <FontAwesomeIcon icon={faBoltLightning} />
                                    <Co.Text>빠른배송</Co.Text>
                                </Co.ExpressBtn>
                            </Co.FilterExpress>
                            <Co.FilterBrand>
                                <Co.BrandBtn>
                                    <Co.Text>브랜드배송</Co.Text>
                                </Co.BrandBtn>
                            </Co.FilterBrand>
                            <Co.FilterBrand>
                                <Co.BrandBtn>
                                    <Co.Text>
                                        <Link to={'/Used/usedMain'}>중고 버튼</Link>
                                    </Co.Text>
                                </Co.BrandBtn>
                            </Co.FilterBrand>
                            <Co.FilterBrand>
                                <Co.BrandBtn>
                                    <Co.Text>현욱 managerPage</Co.Text>
                                </Co.BrandBtn>
                            </Co.FilterBrand>
                        </Co.FilterBtns>
                        <div>
                            <Co.FilterSorting>
                                <Co.SortingTitle
                                    type="button"
                                    onClick={openModal}
                                >
                                    인기순
                                </Co.SortingTitle>
                                <Modal
                                    setDummy={setDummy}
                                    open={modalOpen}
                                    close={closeModal}
                                >
                                    {/* modalOpen 현재 state 상태  */}
                                </Modal>
                            </Co.FilterSorting>
                        </div>
                    </Co.SearchOption>
                    <div>
                        <div>
                            <Co.FilterTag></Co.FilterTag>
                        </div>
                    </div>
                    <Co.SearchResult>
                        <Co.SearchResultList>
                            {dummy.map(item => (
                                <Co.ProductCard key={item.seq}>
                                    <Link to={`/products/${item.seq}`}>
                                        <Co.ItemInner href="#">
                                            <Co.Product>
                                                <Co.ProductImg>
                                                    <Co.Source
                                                        type="image/webp"
                                                        srcSet={item.img_web}
                                                    ></Co.Source>
                                                    <Co.Source
                                                        srcSet={item.img}
                                                    ></Co.Source>
                                                    <Co.Image
                                                        alt={item.sub_title}
                                                        src={item.img}
                                                        loading="lazy"
                                                    ></Co.Image>
                                                </Co.ProductImg>
                                            </Co.Product>
                                            <Co.ProductInfoArea>
                                                <Co.Title>
                                                    <Co.ProductInfoBrand>
                                                        {item.brand}
                                                    </Co.ProductInfoBrand>
                                                    <Co.ProductInfoName>
                                                        <Co.Name>
                                                            {item.title}
                                                        </Co.Name>
                                                        <Co.TranslatedName>
                                                            {item.subTitle}
                                                        </Co.TranslatedName>
                                                    </Co.ProductInfoName>
                                                </Co.Title>
                                                <Co.ProductExpress>
                                                    <FontAwesomeIcon
                                                        icon={faBoltLightning}
                                                    />
                                                    빠른배송
                                                </Co.ProductExpress>
                                            </Co.ProductInfoArea>
                                            <Co.PriceInfoArea>
                                                <Co.Amount>{addComma(item.releasePrice)}</Co.Amount>
                                                <Co.Desc>즉시 구매가</Co.Desc>
                                            </Co.PriceInfoArea>
                                        </Co.ItemInner>
                                    </Link>
                                    <Co.ActionWishReview>
                                        <Co.WishFigure>
                                            <Co.BtnWish
                                                href="#"
                                                aria-label="관심상품"
                                                icon-name="ico-wish-grey"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faBookmark}
                                                />
                                            </Co.BtnWish>
                                            <Co.Text>
                                                {followCalc(item.interest)}
                                                
                                            </Co.Text>
                                        </Co.WishFigure>
                                        <Co.ReviewFigure>
                                            <Co.ReviewLink
                                                href="/social/products/51930"
                                                aria-label={item.subTitle}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                />
                                            </Co.ReviewLink>
                                            <Co.Text>
                                                {followCalc(item.follow)}
                                            </Co.Text>
                                        </Co.ReviewFigure>
                                    </Co.ActionWishReview>
                                </Co.ProductCard>
                            ))}
                        </Co.SearchResultList>
                    </Co.SearchResult>
                </Co.SearchContent>
            </Co.Content>
        </>
    );
};

export default Content;
