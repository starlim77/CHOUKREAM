import React from 'react';
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

const Trending = () => {    
    return (
        <>
            <Header />
            <Social />
            <div>인기/최신/팔로잉</div>
            <div>태그</div>

            <Container fixed>            
            <S.TrGridContainer>
            
                <S.TrGridBox>
                <div>피드 
                    <Grid item xs="auto">
                        <Card sx={{ width: 250 }}>
                            <a>                             
                            <S.TrGridBoxImg src="../image/logo.png"></S.TrGridBoxImg>
                            
                            <CardHeader 
                                avatar={
                                    <Avatar sx={{ bgcolor: grey }} >
                                    
                                    </Avatar>
                                }
                                title="아이디"                                
                            />
                            </a>  
                            <CardContent>       
                                <Typography variant="body2" color="text.secondary">
                                내용                            
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

                                    <p>                                
                                    상품리스트
                                        <ul>
                                            <li>1</li>
                                            <li>1</li>
                                            <li>1</li>
                                            <li>1</li>
                                        </ul>
                                    </p>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
                </S.TrGridBox>
                <S.TrGridBox>
                <div>피드 
                    <Grid item xs="auto">
                        <Card sx={{ width: 250 }}>
                            <a>                             
                            <S.TrGridBoxImg src="../image/logo.png"></S.TrGridBoxImg>
                            
                            <CardHeader 
                                avatar={
                                    <Avatar sx={{ bgcolor: grey }} >
                                    
                                    </Avatar>
                                }
                                title="아이디"                                
                            />
                            </a>  
                            <CardContent>       
                                <Typography variant="body2" color="text.secondary">
                                내용                            
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

                                    <p>                                
                                    상품리스트
                                        <ul>
                                            <li>2</li>
                                            <li>2</li>
                                            <li>2</li>
                                            <li>2</li>
                                        </ul>
                                    </p>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
                </S.TrGridBox>
                <S.TrGridBox>
                <div>피드 
                    <Grid item xs="auto">
                        <Card sx={{ width: 250 }}>
                            <a>                             
                            <S.TrGridBoxImg src="../image/logo.png"></S.TrGridBoxImg>
                            
                            <CardHeader 
                                avatar={
                                    <Avatar sx={{ bgcolor: grey }} >
                                    
                                    </Avatar>
                                }
                                title="아이디"                                
                            />
                            </a>  
                            <CardContent>       
                                <Typography variant="body2" color="text.secondary">
                                내용                            
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

                                    <p>                                
                                    상품리스트
                                        <ul>
                                            <li>3</li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </p>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
                </S.TrGridBox>
                <S.TrGridBox>
                <div>피드 
                    <Grid item xs="auto">
                        <Card sx={{ width: 250 }}>
                            <a>                             
                            <S.TrGridBoxImg src="../image/logo.png"></S.TrGridBoxImg>
                            
                            <CardHeader 
                                avatar={
                                    <Avatar sx={{ bgcolor: grey }} >
                                    
                                    </Avatar>
                                }
                                title="아이디"                                
                            />
                            </a>  
                            <CardContent>       
                                <Typography variant="body2" color="text.secondary">
                                내용                            
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

                                    <p>                                
                                    상품리스트
                                        <ul>
                                            <li>4</li>
                                        </ul>
                                    </p>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
                </S.TrGridBox>
                <S.TrGridBox>
                <div>피드 
                    <Grid item xs="auto">
                        <Card sx={{ width: 250 }}>
                            <a>                             
                            <S.TrGridBoxImg src="../image/logo.png"></S.TrGridBoxImg>
                            
                            <CardHeader 
                                avatar={
                                    <Avatar sx={{ bgcolor: grey }} >
                                    
                                    </Avatar>
                                }
                                title="아이디"                                
                            />
                            </a>  
                            <CardContent>       
                                <Typography variant="body2" color="text.secondary">
                                내용                            
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

                                    <p>                                
                                    상품리스트
                                        <ul>
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                        </ul>
                                    </p>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
                </S.TrGridBox>
                <S.TrGridBox>
                <div>피드 
                    <Grid item xs="auto">
                        <Card sx={{ width: 250 }}>
                            <a>                             
                            <S.TrGridBoxImg src="../image/logo.png"></S.TrGridBoxImg>
                            
                            <CardHeader 
                                avatar={
                                    <Avatar sx={{ bgcolor: grey }} >
                                    
                                    </Avatar>
                                }
                                title="아이디"                                
                            />
                            </a>  
                            <CardContent>       
                                <Typography variant="body2" color="text.secondary">
                                내용                            
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

                                    <p>                                
                                    상품리스트
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </p>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
                </S.TrGridBox>
                <S.TrGridBox>
                <div>피드 
                    <Grid item xs="auto">
                        <Card sx={{ width: 250 }}>
                            <a>                             
                            <S.TrGridBoxImg src="../image/logo.png"></S.TrGridBoxImg>
                            
                            <CardHeader 
                                avatar={
                                    <Avatar sx={{ bgcolor: grey }} >
                                    
                                    </Avatar>
                                }
                                title="아이디"                                
                            />
                            </a>  
                            <CardContent>       
                                <Typography variant="body2" color="text.secondary">
                                내용                            
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

                                    <p>                                
                                    상품리스트
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </p>
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
                </S.TrGridBox>
              
            </S.TrGridContainer>   
              
            
            </Container>
        </>
        
    );
};

export default Trending;