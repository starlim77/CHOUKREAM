
import React, { useEffect } from 'react';
import * as Ban from './BannerStyle';

const BannerBox = ({ item, setBannerCnt, bannerCnt }) => {
    const { id, src, current, rgb, alt } = item;

    const toPrev = () => {
        bannerCnt === 0 ? setBannerCnt(10) : setBannerCnt(bannerCnt - 1);
    };
    const toNext = () => {
        bannerCnt === 10 ? setBannerCnt(0) : setBannerCnt(bannerCnt + 1);
    };

    //timer();

    useEffect(() => {
        const timer = setInterval(() => {
            toNext();
        }, 1500);

        return () => clearInterval(timer);
    });

    // var timer = setInterval(toNext(), 1000);

    // function autoSlide() {
    //     if(timer == undefined) {
    //         timer = setInterval(() => {
    //             toNext()
    //         }, 1000);
    //     }
    // }
    // stopSlide();
    // autoSlide()

    // function stopSlide() {
    //     clearInterval(timer);
    // }

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
                                            <Ban.BannerImg
                                                alt={alt}
                                                src={src}
                                            />
                                            <Ban.BannerCountBox>
                                                <Ban.SlickPrev onClick={toPrev}>
                                                    Previous
                                                </Ban.SlickPrev>
                                                <Ban.BannerCount>
                                                    <Ban.Current>
                                                        {current}
                                                    </Ban.Current>
                                                    /<Ban.Total>11</Ban.Total>
                                                </Ban.BannerCount>
                                                <Ban.SlickNext onClick={toNext}>
                                                    Next
                                                </Ban.SlickNext>
                                            </Ban.BannerCountBox>
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

export default BannerBox;
