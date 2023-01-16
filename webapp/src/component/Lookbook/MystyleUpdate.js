import { Avatar, Button, Card, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import StyleProduct from './StyleProduct';

const MystyleUpdate = () => {
    const { seq, product_seq } = useParams();  //주소값 파라미터 seq 가져오기
    const imgRef = useRef();
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        id: '',
        content: '',
        seq :'',
        productSeq:''

    })
    const {id, content, productSeq} = form  

    const onInput = (e) => {
        const { name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    
    // const readURL = () => {};
    
    //수정하기
    const onUpdate = (e) => {    
       e.preventDefault();
    
       axios.put('http://localhost:8080/lookbook/update', null, {
                params:{
                    seq : seq, // seq 필수로 들어가야 함 .그래야 insert가 아닌 update가  (seq가 pk) 
                    content : content,
                    id : id ,
                    productSeq : productSeq  
                }
            })      
             .then(
                alert("글 수정완료"),
                navigate('/lookbook/mystyle')
            )
             .catch(error => console.log(error))
    };


    //삭제하기
    const onDelete = () => { 
        axios.delete(`http://localhost:8080/lookbook/delete?seq=${seq}`)
            .then(
                alert("게시글 삭제완료"),
                navigate('/lookbook/mystyle')
            )
            .catch(error => console.log(error) )

    }; 


    //선택한 글 가지고오기
    useEffect( ()=> {
        axios.get(`http://localhost:8080/lookbook/findMyListDetail/${seq}`)
             .then(res => setForm(res.data) )
             .catch(error => console.log(error))
    }, []) 


    return (
        <div>
             <Dialog open={true}>
               <DialogTitle>게시물 수정</DialogTitle>  

               <DialogContent> 
                    <form>
                        <Card>
                            <CardHeader
                                avatar={ <Avatar>프로필</Avatar> }
                                title={id}
                                value={id}
                                name='id'
                                onChange={onInput}
                            />   


                            <S.Container>
                                <S.showImgSrcDiv>  {/* 사진은 수정불가 */}
                                        {
                                          form.storedFileName?
                                            form.storedFileName.map( (item, index) => (
                                                    <p key={index}>
                                                        <img src={'/storage/'+item} ref={imgRef} />
                                                    </p>
                                                ))
                                            :
                                            ''
                                         }
                                </S.showImgSrcDiv>
                            </S.Container>

                            <div>    {/* 태그 상품 수정불가 보이기만함 */}
                                { 
                                    (product_seq) && <StyleProduct productSeq={product_seq}></StyleProduct>
                                }
                            </div> 

                            <textarea 
                                    type='text-area'
                                    name='content'
                                    //value={content}  변하는 값
                                    defaultValue={content}
                                    onChange={onInput}
                                    style={{width:494, height:80, resize:'none'}}  />

                       

                            <DialogActions>
                                    <Button onClick={ onUpdate }>수정</Button>
                                    <Button onClick={ onDelete }>삭제</Button>
                                    <Button><Link to={`/lookbook/mystyleDetail/${id}`}>취소</Link></Button>
                                    {/* <Button onclick={navigate(-1) }>취소</Button> */}
                                         
                            </DialogActions> 

                        </Card>

                    </form> 


               </DialogContent>
 
 
            </Dialog> 
        </div>
    );
};

export default MystyleUpdate;

