import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { 
    CardContent,
    CardHeader,
    IconButton, 
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import * as S from './style';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Detail from './Detail';


const TrendingItem = ({item,index,itemLength,id}) => {
    
    const [isLike, setIsLike] = useState(0);



    return (
        
        <S.TrGridBox style={{display : index < itemLength ? '':'none'}}>
           
            <Card sx={{ width: 250 }} >
                
                <Link to={'/lookbook/detail'} state={{id:id}}>

                    <S.TrGridBoxImg src={'../storage/' + item.storedFileName[0]}/>

                    <S.TrBox>
                        <CardHeader 
                                avatar={ <Avatar sx={{ bgcolor: grey }} mr={'3'}/>    } // 개인프로필사진 넣을곳
                                />
                        <S.TrUsernameBox>
                        {item.email}
                        {/* {item.name} */}
                        </S.TrUsernameBox>

                        <S.TrlikeBox>
                            <IconButton aria-label="add to favorites">
                                <img src={ isLike === 1 ?  '/image/style/likes.png'  : '/image/style/unlikes.png'  }
                                    style={{ width:'28px'}} />
                            </IconButton>
                            {item.likesCount}
                        </S.TrlikeBox>
                    </S.TrBox>

                </Link>

                <CardContent>
                    <S.TrTypoDiv>
                        {item.content}
                    </S.TrTypoDiv>
                </CardContent>

            </Card>
        </S.TrGridBox>
    );
};

export default TrendingItem;