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
import { Link } from 'react-router-dom';
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";


const Trending = () => {  
    const[list, setList] =useState([{
        seq: '',
        id: '',
        content: '',
        logtime: '',
        styleFile: '',
        originalFileName:[],
        storedFileName:[]
    }])
    

    useEffect(() => {
        axios
            .get('http://localhost:8080/lookbook/getStyleList')
            .then( res => setList(res.data))               
            .catch(error => console.log(error));
    }, []);

    //네이버
    // function getItems(nextGroupKey, count) {
    //     const nextItems = [];
      
    //     for (let i = 0; i < count; ++i) {
    //       const num = nextGroupKey * count + i;
    //       nextItems.push(`<div class="item">
    //     <div class="thumbnail">
    //         <img src="https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg" alt="egjs" />
    //     </div>
    //     <div class="info">egjs ${num}</div>
    //   </div>`);
    //     }
    //     return nextItems;
    //   }
    //   const ig = new MasonryInfiniteGrid(".container", {
    //     gap: 5,
    //   });

    return (
        
        <> 
               
            <Social />
            <div>태그</div>
    
            {/* <MasonryInfiniteGrid
                className='products'
               
                gap={25}
                threshold={1000}
                onRequestAppend={(e) => {
                    const nextGroupKey = (+e.groupKey! || 0) + 1;
              
                    setItems([
                      ...items,
                      ...getItems(nextGroupKey, 10),    
                    ]);
                  }}
                > */}
   
    
            <Container fixed> 
                 
            <S.TrGridContainer>   
            
                { list.map(item =>{ return(
                    <S.TrGridBox key={item.seq}>                     
                        
                            <Card sx={{ width: 250 }}>
                                <Link to = {'/lookbook/detail'+ item.seq}>                                                                                
                                <S.TrGridBoxImg src={'../storage/'+item.storedFileName[0]}></S.TrGridBoxImg>    
                                 
                                {
                                item.storedFileName.map((index,item) => {
                                    return(<img src={'../storage/'+item}/>)
                                })
                                }                        
                                
                                <CardHeader 
                                    avatar={
                                        <Avatar sx={{ bgcolor: grey }} >
                                        
                                        </Avatar>
                                    }
                                    title= {item.id}                                
                                />
                               
                                </Link>
                                <CardContent>       
                                    <Typography variant="body2" color="text.secondary" >
                                    <S.TrTypoDiv>
                                    {item.content}
                                    <br/>                                    
                                    </S.TrTypoDiv>                      
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

                                       
                                    </Typography>
                                </CardActions>
                            </Card>
                                         
                  
                    </S.TrGridBox> 
                    )
                    })
                }           
            
            </S.TrGridContainer>      
              
            </Container>
            {/* </MasonryInfiniteGrid> */}
        </>
        
    );
};

export default Trending;