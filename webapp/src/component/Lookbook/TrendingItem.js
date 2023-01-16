import React from 'react';

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
    return (
        <S.TrGridBox style={{display : index < itemLength ? '':'none'}}>
            <Card sx={{ width: 250 }}>
                <Link to={'/lookbook/detail' + item.seq}>
                    <S.TrGridBoxImg src={'../storage/' + item.storedFileName[0]}/>

                    <CardHeader 
                        avatar={ <Avatar sx={{ bgcolor: grey }} /> }
                        title={item.id}/>
                </Link>

                <CardContent>
                    <S.TrTypoDiv>
                        {item.content}
                    </S.TrTypoDiv>
                </CardContent>

                <CardActions disableSpacing>
                    <Typography variant="body2" color="text.secondary">
                        <IconButton aria-label="add to favorites">
                            <FavoriteBorderOutlinedIcon />
                            <FavoriteIcon />
                        </IconButton>
                        <span>35 </span>
                        <IconButton aria-label="add to favorites">
                            <MessageOutlinedIcon />
                        </IconButton>
                        <span>{item.commentCount}</span>
                    </Typography>
                </CardActions>
            </Card>
        </S.TrGridBox>
    );
};

export default TrendingItem;