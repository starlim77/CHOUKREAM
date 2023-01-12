import React, { useState } from 'react';

import Card from '@mui/material/Card';
import {
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import * as S from './style';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';

const TrendingItem = ({item,index,itemLength}) => {
    //
    const [isLike, setIsLike] = useState(0);

    return (
        <S.TrGridBox style={{display : index < itemLength ? '':'none'}}>
            <Card sx={{ width: 250 }}>
                <Link to={'/lookbook/detail' + item.seq}>
                    <S.TrGridBoxImg src={'../storage/' + item.storedFileName[0]}/>
                </Link>
                
                <S.TrBox>
                        <CardHeader 
                                avatar={ <Avatar sx={{ bgcolor: grey }} />    } // 개인프로필사진 넣을곳
                                />
                        <S.TrUsernameBox>
                        {item.id}
                        </S.TrUsernameBox>

                    <S.TrlikeBox>
                        <IconButton aria-label="add to favorites"
                        // onClick={ () => onLikes(item.seq)}
                        >
                            <img src={ isLike === 1 ?  '/image/style/likes.png'  : '/image/style/unlikes.png'  }
                                style={{ width:'28px'}} />
                                {item.likesCount}
                                
                        </IconButton>
                    </S.TrlikeBox>
                </S.TrBox>

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