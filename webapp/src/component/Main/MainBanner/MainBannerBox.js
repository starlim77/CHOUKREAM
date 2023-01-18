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

    const [temp,setTemp] = useState([]);
    
    const onClickDot = (index, e, id) => {
        e.preventDefault();
        setBannerCnt(index)
    
        setTemp([])
       
        for(let i=0; i<9; i++){
            if(i === index){
                 temp.push(true)
            }else{
                 temp.push(false);
            }
        }
        
        setActiveList(temp)
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
    const [isActive1, setIsActive1] = useState(false)
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
                                                    // <Ban.Dot key={index} onClick={(e) => onClickDot(index,e)}
                                                    // id={index}  
                                                    // style={{backgroundColor : isActive ? "red" :  "blue"}}
                                                    // ></Ban.Dot>))}
                                                    <Ban.Dot key={index} onClick={(e) => onClickDot(index,e)} active={acticList[index]}
                                                    ></Ban.Dot>))}
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