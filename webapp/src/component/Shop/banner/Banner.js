import React, { useState } from 'react';
import * as Ba from './BannerStyle';
import bannerData from './BannerData';
import BannerBox from './BannerBox';

const Banner = () => {
    
    const [bannerCnt, setBannerCnt] = useState(0)
    
    return (
        <>
            {/* {console.log(bannerData[0])} */}
            <Ba.Banner>
                <BannerBox
                    item={bannerData[bannerCnt]}
                    bannerCnt={bannerCnt}
                    setBannerCnt={setBannerCnt}
                />
            </Ba.Banner>
        </>
    );
};

export default Banner;