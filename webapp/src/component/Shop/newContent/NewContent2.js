import React, { useEffect, useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import * as Co from './ContentStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../modal/Modal';
import { Link, useLocation } from 'react-router-dom';
import categoryData from './CategoryData';
import MenuList from './MenuList';
import NewModal from '../newProductModal/NewModal';

const NewContent2 = ({
    dummy,
    setDummy,
    dummy2,
    sortCheck,
    setSortCheck,
    dummyFilter,
    modalOpen,
    openModal,
    closeModal,
    tagLive,
}) => {
    const [categoryData2, setCategoryData2] = useState(categoryData);
    const location = useLocation();
    // console.log(location.state.name)
    // console.log(dummyFilter)

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
    // const [heightTop, setHeightTop] = useState(0)
    // const [scrollHeight, setScrollHeight] = useState(0)
    // const [heightTop, setHeightTop] = useState(0)

    const handleScroll = () => {
        /// setHeightTop(window.scrollY);
        // var heightTop = window.scrollY; // 화면의 Y축의 상단값

        const heightBottom = window.scrollY + window.innerHeight; // 화면의 Y축의 하단값
        // const innerHeight = window.innerHeight;
        // console.log('window.scrollY 화면의 Y축의 상단값 ' + heightTop);
        // console.log('window.innerHeight 브라우저 화면의 높이' + innerHeight); // 현재 브라우저 화면의 높이
        // console.log('Y축의 하단값' + heightBottom); //window.scrollY + window.innerHeight 화면의 y축 하단값

        const scrollHeight = document.body.scrollHeight;
        // console.log('scrollHeight 스크롤 전체길이 ' + scrollHeight); // 불변 잠깐주석

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
            // 잠깐주석 console.log('하단높이 ' + heightBottom + ' , ' + (scrollHeight - 100));
            setPictures(pictures => pictures + 8);
            // 상태변수f는 다시 리렌더링 하기 전까지는 안바뀐다
            // 잠깐 주석 console.log('이게 8개 늘려줌');
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
    const [isActive2, setIsActive2] = useState(true);

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
                // item.id == id 다르면
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

    const photoshop = itemImg => {
        // console.log(itemImg)
        // console.log(typeof(itemImg))
        if (itemImg !== null && itemImg !== undefined) {
            //console.log(itemImg);
            const img = itemImg.split(',');
            // console.log(img[0])
            // console.log(typeof(img[0]))
            return img[0];
        }
    };
    
    // 체크박스 구현
    const [menuArray, setMenuArray] = useState({
        // 0 = 체크안된상태 1 = 체크 된 상태
        남자: 0,
        여자: 0,
        신발: 0,
        의류: 0,
        잡화: 0,
        '10만원 이하': 0,
        '10만원 - 30만원 이하': 0,
        '30만원 - 50만원 이하': 0,
        '50만원 이상': 0,
    }); // 무슨 menu를 눌렀는지
    const noBrandOptionList = [
        // brand는 몇개인지 모르고 // brand가 아닌것들만 정리해둠
        // 여기 없으면 무조건 brand 임
        '남자',
        '여자',
        '신발',
        '의류',
        '잡화',
        '10만원 이하',
        '10만원 - 30만원 이하',
        '30만원 - 50만원 이하',
        '50만원 이상',
    ];
    
    // dummy , dummy2 68개의 데이터
    const dataSetting = menu => {
        let newMenuArray = Object.assign({}, menuArray); // menuArray 객체를 복사함 
        // 클릭을 했을때 newMenuArray 여기에 없다면 brand 다 
        // 근데 있어도 brand 일수도 있다 
        // 없으면 추가 있으면 토글
        if (menu in newMenuArray) {
            // 이미 클릭했던 적이 있을 경우
            if (newMenuArray[menu] === 0) {
                // 마지막으로 클릭했을 때 해제한 경우
                newMenuArray[menu] = 1;
            } else {
                // 마지막으로 클릭했을 때 선택한 경우
                newMenuArray[menu] = 0;
            }
        } else {
            // 한 번도 클릭해보지 못한 경우
            newMenuArray[menu] = 1;
        }
        // 아무것도 선택이 안되어있을때 (초기상태)
        // 각각의 옵션을 true로 둔다
        // console.log(newMenuArray);
        let noCategoryOption = true;
        let noBrandOption = true;
        let noGenderOption = true;
        let noPriceOption = true;
        
        // check 된게 있으면 false로 바꿔준다 
        // 각각 옵션에 대해서 총 4번한다
        if (
            newMenuArray['의류'] +
                newMenuArray['신발'] +
                newMenuArray['잡화'] !==
            0
        ) {
            noCategoryOption = false;
        }

        if (
            newMenuArray['10만원 이하'] +
                newMenuArray['10만원 - 30만원 이하'] +
                newMenuArray['30만원 - 50만원 이하'] +
                newMenuArray['50만원 이상'] !==
            0
        ) {
            noPriceOption = false;
        }
        
        // 성별은 남 녀 일때 
        if (newMenuArray['남자'] + newMenuArray['여자'] === 1) {
            noGenderOption = false;
        }
        // console.log(noBrandOptionList);
        for (const [k, v] of Object.entries(newMenuArray)) {
            // brand가 아닌 리스트에 없으므로 브랜드가 아닌게 아니다
            // 2중부정 
            if (
                (noBrandOptionList.indexOf(k) === -1) && // 이걸 통과한 순간 k = brand
                // v === 1 // check가 되어있냐 ? value를 확인 둘이 같음 
                newMenuArray[k] === 1 // check가 되어있냐 ? value를 확인
            ) {
                // console.log('dfddfdsdf', noBrandOptionList.indexOf(k), k, v);
                noBrandOption = false;
                break;
            }
        }
        // console.log(
        //     noCategoryOption,
        //     noBrandOption,
        //     noGenderOption,
        //     noPriceOption,
        // );
        
        let temp = dummy2.filter(item => {
            if (item.min_price === '-') {
                item.min_price = 0
            }
            // console.log(item);
            if (!noCategoryOption && newMenuArray[item.category] === 0) {
                // 무언가 체크를 했을때 noCategoryOption 가 false 인데 ! 써서 true 됨
                // true면 newMenuArray 안에 item.category 가 0(체크안됨)을 찾아서 뺴준다
                
                // 카테고리 중 무엇인가가 체크가 되어있고,
                // item의 카테고리가 그 체크된 항목과 맞지 않는 경우
                return false;
            } else if (
                // console.log(item.price),
                // noPriceOption 만약에 true면 거치질 않는다 조건이 없다
                // true면 체크가 안되어있는거니까 확인할 필요가 없다 
                !noPriceOption &&  
                ((item.price <= 100000 && newMenuArray['10만원 이하'] === 0) ||
                    (item.price > 100000 && item.price <= 300000 && newMenuArray['10만원 - 30만원 이하'] === 0) ||
                    (item.price > 300000 && item.price <= 500000 && newMenuArray['30만원 - 50만원 이하'] === 0) ||
                    (item.price > 500000 && newMenuArray['50만원 이상'] === 0))
            ) {
                // 가격 중 무엇인가가 체크가 되어있고, item의 가격이 그 체크된 범위와 맞지 않는 경우
                return false;
            } else if (
                !noGenderOption &&
                item.gender !== 2 &&
                newMenuArray[item.gender === 0 ? '남자' : '여자'] === 0
                
            ) {
                // "무관"이 체크 되어있지 않고, 성별 중 무엇인가가 체크되어 있고, item의 성별이 그 체크된 성별과 맞지 않는 경우
                return false;
            } else if (!noBrandOption) {
                if (!(item.brand in newMenuArray)) {
                    return false;
                } else if (newMenuArray[item.brand] === 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                // 이걸 다 통과 해야만 true
                // 아닌 것 들을 걸러 준다 
                // 모든 조건을 만족해야 한다 
                return true;
            }
        });

        setDummy(temp);
        setMenuArray(newMenuArray);
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
                                <MenuList
                                    item={item}
                                    dummy={dummy}
                                    setDummy={setDummy}
                                    setPictures={setPictures}
                                    dataSetting={dataSetting}
                                ></MenuList>
                            </Co.FilterMenu>
                        </Co.FilterList>
                    ))}
                </Co.SearchFilter>
                <Co.SearchContent>
                    <Co.SearchOption>
                        <Co.FilterBtns>
                            <Co.FilterExpress
                                style={{ display: !isActive2 ? 'none' : '' }}
                            >
                                <Co.ExpressBtn3
                                    onClick={() => setIsActive2(!isActive2)}
                                >
                                    <Co.Text>브랜드배송</Co.Text>
                                </Co.ExpressBtn3>
                            </Co.FilterExpress>
                            <Co.FilterExpress
                                style={{ display: !isActive2 ? '' : 'none' }}
                            >
                                <Co.ExpressBtn
                                    onClick={() => setIsActive2(!isActive2)}
                                >
                                    <Co.Text>브랜드배송</Co.Text>
                                </Co.ExpressBtn>
                            </Co.FilterExpress>
                        </Co.FilterBtns>
                        <div>
                            <Co.FilterSorting>
                                <Co.SortingTitle
                                    type="button"
                                    onClick={openModal}
                                >
                                    인기순
                                </Co.SortingTitle>
                                <NewModal
                                    setDummy={setDummy}
                                    open={modalOpen}
                                    close={closeModal}
                                    setPictures={setPictures}
                                    sortCheck={sortCheck}
                                    setSortCheck={setSortCheck}
                                >
                                    {/* modalOpen 현재 state 상태  */}
                                </NewModal>
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
                            {/* {console.log('더미더미 ' + dummyFilter)} */}
                            {/* {console.log(dummy)} */}
                            {tagLive
                                ? dummyFilter &&
                                  dummyFilter.map((item, index) => (
                                      <Co.ProductCard
                                          key={item.seq}
                                          style={{
                                              display:
                                                  pictures > index
                                                      ? 'block'
                                                      : 'none',
                                          }}
                                          // 사진 8개씩 출력 idx는 0부터 시작
                                      >
                                          <Link to={`/newProducts/${item.seq}`}
                                          style={{ textDecoration: 'none' }}>
                                              <Co.ItemInner href="#">
                                                  <Co.Product>
                                                      <Co.ProductImg
                                                          //src={item.imgName}
                                                          src={`/newProductList/${photoshop(
                                                              item.img_name,
                                                              //item.imgName,
                                                          )}`}
                                                      >
                                                        {/* picture 태그 사용시 밑에꺼 사용 */}
                                                        {/* <Co.Source
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
                                                    ></Co.Image> */}
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
                                                                  {
                                                                      item.subTitle
                                                                  }
                                                              </Co.TranslatedName>
                                                          </Co.ProductInfoName>
                                                      </Co.Title>
                                                      <Co.ProductExpress2>
                                                          브랜드배송
                                                      </Co.ProductExpress2>
                                                  </Co.ProductInfoArea>
                                                  <Co.PriceInfoArea>
                                                      <Co.Amount>
                                                        {/* {console.log(item.price)} */}
                                                        {addComma(
                                                            // sortCheck
                                                            //     ? item.max_price
                                                            //     : item.min_price,
                                                            item.price
                                                        )}
                                                      </Co.Amount>
                                                      <Co.Desc>
                                                          즉시 구매가
                                                      </Co.Desc>
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
                                                      {followCalc(
                                                          Number(
                                                              item.like_count,
                                                          ),
                                                      )}
                                                  </Co.Text>
                                              </Co.WishFigure>
                                          </Co.ActionWishReview>
                                      </Co.ProductCard>
                                  ))
                                : dummy.map((item, index) => (
                                      <Co.ProductCard
                                          key={item.seq}
                                          style={{
                                              display:
                                                  pictures > index
                                                      ? 'block'
                                                      : 'none',
                                          }}
                                          // 사진 8개씩 출력 idx는 0부터 시작
                                      >
                                          <Link to={`/newProducts/${item.seq}`}
                                            style={{ textDecoration: 'none' }}>
                                              <Co.ItemInner href="#">
                                                  <Co.Product>
                                                      <Co.ProductImg
                                                          // src={item.imgName}
                                                          src={`/newProductList/${photoshop(
                                                            item.img_name,
                                                            //item.img_name,
                                                          )}`}
                                                      >
                                                          {/* picture 태그 사용시 밑에꺼 사용 */}
                                                          {/* <Co.Source
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
                                                    ></Co.Image> */}
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
                                                                  {
                                                                      item.subTitle
                                                                  }
                                                              </Co.TranslatedName>
                                                          </Co.ProductInfoName>
                                                      </Co.Title>
                                                      <Co.ProductExpress2>
                                                          브랜드배송
                                                      </Co.ProductExpress2>
                                                  </Co.ProductInfoArea>
                                                  <Co.PriceInfoArea>
                                                      <Co.Amount>
                                                        {addComma(
                                                            // sortCheck
                                                            //     ? item.max_price
                                                            //     : item.min_price
                                                            item.price
                                                          )}
                                                      </Co.Amount>
                                                      <Co.Desc>
                                                          즉시 구매가
                                                      </Co.Desc>
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
                                                      {followCalc(
                                                          Number(
                                                              item.like_count,
                                                          ),
                                                      )}
                                                  </Co.Text>
                                              </Co.WishFigure>
                                              {/* <Co.ReviewFigure>
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
                                            </Co.ReviewFigure> */}
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

export default NewContent2;
