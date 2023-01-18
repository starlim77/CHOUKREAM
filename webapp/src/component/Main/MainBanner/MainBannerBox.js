import React, { useEffect, useState } from 'react';
import * as Ban from './MainBannerStyle';

const MainBannerBox = ({ item, setBannerCnt, bannerCnt }) => {
    const { id, src, current, rgb, alt } = item;

    const toPrev = () => {
        bannerCnt === 0 ? setBannerCnt(10) : setBannerCnt(bannerCnt - 1);
    };
    const toNext = () => {
        bannerCnt === 8 ? setBannerCnt(0) : setBannerCnt(bannerCnt + 1);
    };

    const onClickDot = (index, e, id) => {
        e.preventDefault();
        setBannerCnt(index)
    
        // console.log(e.target.id)
        // if (e.target.id == 1)
        // setIsActive(!isActive)
        // console.log(isActive)

        //acticList[index] = true
        // acticList.map((item,num) => num !== index ? acticList[index] = false : true)
        // setActiveList([...acticList])
    }

    const [acticList,setActiveList] = useState([false,false,false,false,false,false,false,false,false])

    // const onActive = (index, current) => {
    //     if(index + 1 === current) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }


    useEffect(() => {
        const timer = setInterval(() => {
            toNext();
        }, 3000);

        return () => clearInterval(timer);
    });

    const [isActive, setIsActive] = useState(false)
    var btn1 = []

    return (
        <>
            <Ban.BannerBox>
                <Ban.BannerSlide className="slides">
                    <Ban.SlickList>
                        <Ban.SlickTrack>
                            <Ban.SlickSlide tabIndex="-1" aria-hidden="false">
                                <div>
                                    <Ban.DetailBanner tabIndex="-1">
                                        <Ban.BannerLink
                                            style={{
                                                backgroundColor: true
                                                    ? rgb
                                                    : '',
                                            }}
                                        >
                                            <Ban.SlickPrev onClick={toPrev}>
                                                    Previous
                                            </Ban.SlickPrev>
                                            <Ban.BannerImg
                                                alt={alt}
                                                src={src}
                                            />
                                            <Ban.SlickNext onClick={toNext}>
                                                    Next
                                            </Ban.SlickNext>
                                            
                                            <Ban.ContainerDots>
                                                {Array.from({length: 9}).map((item, index) => (
                                                    <Ban.Dot key={index} onClick={(e) => onClickDot(index,e)}
                                                    id={index+1}
                                                    ></Ban.Dot>))}
                                                    {/* <Ban.Dot key={index} onClick={(e) => onClickDot(index,e)} active={acticList[index]}
                                                    id={index+1} style={{ backgroundColor : isActive ? "red" :  "blue"}}
                                                    ></Ban.Dot>))} */}
                                                    {/* //  <Ban.Dot key={index} onClick={(e) => onClickDot(index,e)} active={true}></Ban.Dot>))}  */}
                                            </Ban.ContainerDots>

                                        </Ban.BannerLink>
                                    </Ban.DetailBanner>
                                </div>
                            </Ban.SlickSlide>
                        </Ban.SlickTrack>
                    </Ban.SlickList>
                </Ban.BannerSlide>
            </Ban.BannerBox>
        </>
    );
};

export default MainBannerBox;