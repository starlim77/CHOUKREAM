import React, { useState } from 'react';
import * as Ba from './MainBannerStyle';
import bannerData from './MainBannerData';
import BannerBox from './MainBannerBox';

const MainBanner = () => {
    const [bannerCnt, setBannerCnt] = useState(0)

    return (
        <>
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

export default MainBanner;