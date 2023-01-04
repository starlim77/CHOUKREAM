import React from 'react';
import * as  Wr from './WriteStyle';

const UserWrite = () => {
    return (
        <>
            <Wr.WriteBody>
                <Wr.ImgBody>
                    <Wr.MainImgP>
                        <Wr.MainImg name='mainImg' src={`${process.env.PUBLIC_URL}/image/used/plusIcon.png`}
                        ></Wr.MainImg>
                    </Wr.MainImgP>
                    <Wr.SubImgBody>
                        <Wr.SubImgP><Wr.SubImg name='subImg1' src='/image/used/plusIcon.png' /></Wr.SubImgP>
                        <Wr.SubImgP><Wr.SubImg name='subImg2' src='/image/used/plusIcon.png' /></Wr.SubImgP>
                        <Wr.SubImgP><Wr.SubImg name='subImg3' src='/image/used/plusIcon.png' /></Wr.SubImgP>
                    </Wr.SubImgBody>
                </Wr.ImgBody>
                
                <Wr.ImgBody>
                    
                </Wr.ImgBody>
            </Wr.WriteBody>
        </>
    );
};

export default UserWrite;