import React, { useEffect, useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import * as Co from './ContentStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../modal/Modal';
import { Link } from 'react-router-dom';
import categoryData from './CategoryData';
import MenuList from './MenuList';

const Content = ({ dummy, setDummy, modalOpen, openModal, closeModal }) => {
    const [categoryData2, setCategoryData2] = useState(categoryData);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            // 여기서 return 은 무슨 뜻 ?? 다른페이지로 이동하거나 할때 발동됨
            // console.log( addEventListener 추가한 스크롤 이벤트 종료 시키기 'end') //처음에 1번나오고 이후에 나옴 
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);
    
    const [pictures, setPictures] = useState(8); // 사진 개수
    // const [scrollHeight, setScrollHeight] = useState(window.scrollY);
    // console.log('유즈스테이트' + scrollHeight)
    const [heightTop, setHeightTop] = useState(0)
    // const [scrollHeight, setScrollHeight] = useState(0)
    // const [heightTop, setHeightTop] = useState(0)

    const handleScroll = () => {
        /// setHeightTop(window.scrollY);
        var heightTop = window.scrollY; // 화면의 Y축의 상단값

        const heightBottom = window.scrollY + window.innerHeight; // 화면의 Y축의 하단값
        const innerHeight = window.innerHeight;
        // console.log('window.scrollY 화면의 Y축의 상단값 ' + heightTop);
        // console.log('window.innerHeight 브라우저 화면의 높이' + innerHeight); // 현재 브라우저 화면의 높이
        // console.log('Y축의 하단값' + heightBottom); //window.scrollY + window.innerHeight 화면의 y축 하단값

        const scrollHeight = document.body.scrollHeight;
        console.log('scrollHeight 스크롤 전체길이 ' + scrollHeight); // 불변
        
        // const clientHeight = document.body.clientHeight;
        // console.log('clientHeight 눈에 보이는 만큼 높이 ' + clientHeight); // 불변
        // 상단값과 + 현재 브라우저 높이 =
        // 현재 브라우저 높이는 불변

        // 상단값 611 -> 1448  / 837차이
        // 스크롤 전체 높이 1392 -> 2230 / 838 차이

        // 611 > 781-100
        // heightTop >= innerHeight - 170 && setF(f + 8);
        
        // if (scrollHeight < 1000) {
        //     setF(f => f + 8);
        //     console.log('우구')
        // }
        
        if (heightBottom >= scrollHeight - 110) {
            console.log( '하단높이 '+ heightBottom + ' , ' + (scrollHeight - 100));
            setPictures(pictures => pictures + 8);
            // 상태변수f는 다시 리렌더링 하기 전까지는 안바뀐다 
            console.log('이게 8개 늘려줌');
        }
        // 1448 >= innerHeight - 170 && setF( f + 8 );
        // if (heightTop === heightBottom - innerHeight && heightTop > 1400) {
        //     setF(f + 16);
        //     console.log('이게 16개 늘려줌 ');
        // }

        // heightTop + 838 >= innerHeight - 170 && console.log('제발');
        // heightTop + 837 >= innerHeight - 200 && setF(f + 8) && console.log('gdgd');
        // heightTop이 바껴야한다
        // usestate로 잡고싶은데 window.scrollY 로 잡으면 0으로 됨

        // 값을 내가 지정해줘야지 구현이 가능하다

        // heightTop + innerHeight > scrollHeight - 200 && setF(f + 8);
        // scrollHeight - 112 < heightBottom && setF(f + 8);
    };

    const [isActive, setIsActive] = useState(true);

    const changeDisplay = id => {
        // console.log('id 는 ? ' + id)
        var copyStatus = [];
        categoryData2.map(item => {
            if (item.id == id) {
                if (!item.checked) {
                    copyStatus.push({ ...item, checked: true });
                } else {
                    copyStatus.push({
                        id: item.id,
                        title: item.title,
                        subTitle: item.subTitle,
                        menuList: item.menuList,
                    });
                }
            } else {
                copyStatus.push({ ...item });
            }
        });
        setCategoryData2(copyStatus);
    };

    // 3자리마다 콤마 넣어서 문자열로 변환
    const addComma = num => {
        num = String(num);
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
    };
    const followCalc = num => {
        if (num < 10000) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } else {
            return num / 10000 + '만';
        }
    };

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

                    {categoryData2.map(item => (
                        <Co.FilterList
                            key={item.id}
                            id={item.id}
                            onClick={e => changeDisplay(item.id)}
                        >
                            <Co.FilterTitle>
                                <Co.TitleBox>
                                    <Co.MainTitle>{item.title}</Co.MainTitle>
                                    <Co.Placeholder>
                                        {item.subTitle}
                                    </Co.Placeholder>
                                </Co.TitleBox>
                                <Co.IcoBox>
                                    <FontAwesomeIcon icon={faPlus} />
                                </Co.IcoBox>
                            </Co.FilterTitle>
                            <Co.FilterMenu
                                style={{
                                    display: item.checked ? 'block' : 'none',
                                }}
                            >
                                <MenuList item={item} setDummy={setDummy} setPictures={setPictures} ></MenuList>
                            </Co.FilterMenu>
                        </Co.FilterList>
                    ))}
                </Co.SearchFilter>
                <Co.SearchContent>
                    <Co.SearchOption>
                        <Co.FilterBtns>
                            <Co.FilterExpress
                                style={{ display: isActive ? 'none' : '' }}
                            >
                                <Co.ExpressBtn
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    <FontAwesomeIcon icon={faBoltLightning} />
                                    <Co.Text>빠른배송</Co.Text>
                                </Co.ExpressBtn>
                            </Co.FilterExpress>
                            <Co.FilterExpress
                                style={{ display: isActive ? '' : 'none' }}
                            >
                                <Co.ExpressBtn2
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    <FontAwesomeIcon icon={faBoltLightning} />
                                    <Co.Text>빠른배송</Co.Text>
                                </Co.ExpressBtn2>
                            </Co.FilterExpress>
                            {/* <Co.FilterBrand>
                                <Co.BrandBtn>
                                    <Co.Text>새상품 버튼</Co.Text>
                                </Co.BrandBtn>
                            </Co.FilterBrand> */}
                            <Co.FilterBrand>
                                <Co.BrandBtn>
                                    <Co.Text>
                                        <Link to={'/Used/usedMain'}>
                                            중고 버튼
                                        </Link>
                                    </Co.Text>
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
                                    setPictures={setPictures}
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
                            {/* {console.log('더미더미 ' + f)} */}
                            {dummy.map((item,index) => (
                                <Co.ProductCard
                                    key={item.seq}
                                    style={{
                                        display: pictures > index ? 'block' : 'none',
                                    }} 
                                    // 사진 8개씩 출력 idx는 0부터 시작
                                >
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
                                                <Co.Amount>
                                                    {addComma(
                                                        item.releasePrice,
                                                    )}
                                                </Co.Amount>
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
