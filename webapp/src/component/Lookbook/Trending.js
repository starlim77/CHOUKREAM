import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Social from '../Lookbook/Social';
import Card from '@mui/material/Card';
import { CardActions, CardContent, CardHeader, Container, Grid, IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import * as S from './style';
import { grey } from '@mui/material/colors';
import axios from 'axios';


const Trending = () => {  
    const[list, setList] =useState([{
        seq: '',
        id: '',
        content: '',
        logtime: '',
        styleFile: '',
        originalFileName:'',
        storedFileName:''
    }])
        originalFileName:[],        
        storedFileName:[]
    }])
    

    useEffect(() => {
        axios
            .get('http://localhost:8080/lookbook/getStyleList')
            .then(  res => console.log(res.data)
                    // res => setList(res.data)
            )               
            .catch(error => console.log(error));
    }, []);


    return (
        
        <>
            <Header />
            <Social />
            
            <div>태그</div>

            <Container fixed>            
            <S.TrGridContainer>
                { list.map(item =>{ return(
                    <S.TrGridBox key={item.seq}> 
                       

                    <div className='item'>피드                         
                        <Grid item xs="auto">
                            <Card sx={{ width: 250 }}>
                                <a>                                                       
                                <S.TrGridBoxImg src={'../storage/'+item.storedFileName[0]}></S.TrGridBoxImg>                              
                                <CardHeader 
                                    avatar={
                                        <Avatar sx={{ bgcolor: grey }} >
                                        
                                        </Avatar>
                                    }
                                    title= {item.id}                                
                                />
                                </a>  
                                <CardContent>       
                                    <Typography variant="body2" color="text.secondary">
                                    {item.content}                        
                                    </Typography>     
                                                
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
                                        <span>15</span>                                                                

                                                                    
                                        {/* 
                                        상품리스트
                                            <ul>
                                                <li>1</li>
                                                <li>1</li>
                                                <li>1</li>
                                                <li>1</li>
                                            </ul> 
                                            */}
                                        
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    </div>
                  
                    </S.TrGridBox> 
                    )
                })
            }                
            </S.TrGridContainer>      
            
            </Container>
        </>
        
    );
};

export default Trending;