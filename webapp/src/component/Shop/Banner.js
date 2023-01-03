import React, { useState } from 'react';
import * as Ba from './BannerStyle';
import bannerData from './BannerData';

const Banner = () => {
    
    const [slidePx, setSlidePx] = useState(0)
    
    const toPrev = () => {
        slidePx < 0 && setSlidePx(slidePx + 1280)
    }
    const toNext = () => {
        slidePx > -14080 && setSlidePx(slidePx - 1280)
    }
    
    return (
        <>
            <Ba.Banner>
                {/* 여기서부터 map 돌리기 */}
                {bannerData.map(item => (
                <Ba.BannerBox key={item.id}
                    id={item.id}
                    style={{
                        transform:`translateX(${slidePx}px)`,
                        transition: "0.5s ease",
                    }}>
                    <Ba.BannerSlide>
                        <Ba.SlickList>
                            <Ba.SlickTrack>
                                <Ba.SlickSlide
                                    tabIndex="-1"
                                    aria-hidden="false"
                                >
                                    <div>
                                        <Ba.DetailBanner tabIndex="-1">
                                            <Ba.BannerLink href="#" 
                                                style={{backgroundColor: true ? item.rgb : ''}}>
                                                <Ba.BannerImg
                                                    alt={item.alt}
                                                    src={item.src}
                                                />
                                                <Ba.BannerCountBox>
                                                    <Ba.SlickPrev onClick={toPrev}>
                                                        {/* style={{ display: slidePx === 0 ? "none" : ""}} */}
                                                        Previous
                                                    </Ba.SlickPrev>
                                                    <Ba.BannerCount>
                                                        <Ba.Current>
                                                            {item.current}
                                                        </Ba.Current>
                                                        /<Ba.Total>11</Ba.Total>
                                                    </Ba.BannerCount>
                                                    <Ba.SlickNext onClick={toNext}
                                                        style={{display: slidePx === -14080 ? "none": ""}}>
                                                        Next
                                                    </Ba.SlickNext>
                                                </Ba.BannerCountBox>
                                            </Ba.BannerLink>
                                        </Ba.DetailBanner>
                                    </div>
                                </Ba.SlickSlide>
                            </Ba.SlickTrack>
                        </Ba.SlickList>
                    </Ba.BannerSlide>
                </Ba.BannerBox>    
                ))}

            </Ba.Banner>
        </>
    );
};

export default Banner;