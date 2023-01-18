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
import * as S from './style';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const FollowingItem = ({item,index,itemLength,email}) => {

    const [isLike, setIsLike] = useState(0);

    var email2 = (email||'').split('@');
    var email3 = email2[0];


    return (
        <S.TrGridBox style={{display : index < itemLength ? '':'none'}}>
            <Card sx={{ width: 250 }} >
                <Link to={'/lookbook/following' + item.seq}>
                    <S.TrGridBoxImg src={'/storage/' + item.storedFileName[0]}/>
                </Link>
                
                <S.TrBox>
                        <CardHeader 
                                avatar={ <Avatar sx={{ bgcolor: grey }} />    } // 개인프로필사진 넣을곳
                                />
                        <S.TrUsernameBox>
                        {email3}
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

export default FollowingItem;