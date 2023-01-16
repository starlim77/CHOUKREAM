import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Li from './NewListStyle';
const UsedItemListing = ({item}) => {
    
    const[img,setImg]=useState();
    const navigate=useNavigate();
    const [data,setData] = useState(item)
    const {seq, id, title , imgName, productName , kind , size , price , contents , likes, hashTag,sellingState,reportNum}=data
    
    useEffect(()=>{
            const img = ((imgName).split(','))
            setImg("/storage/"+img[0])

    },[])

    const onDelete=(e)=>{
        e.preventDefault();
       
        window.confirm("정말 삭제하시겠습니까?")&&axios.delete(`http://localhost:8080/used/deleteItem?seq=${seq}`)
       // axios.delete('http://localhost:8080/used/deleteItem',{params:{seq:seq}})
            .then(window.location.reload())
            .catch(err=>console.log(err))
    }

    const selectList=[true,false];

    const onSelect=(e)=>{
       setData({...data,sellingState:!sellingState});
  
       axios.put('http://localhost:8080/used/updateState','',({params:{
                    seq:seq,
                    sellingState:!sellingState
                }}))
                .then(window.location.reload())
                .catch(error => console.log(error))
    }
    return (
        
            <Li.Tr2>
                    <Li.Td2>{seq}</Li.Td2>
                    <Li.Td2>{id}</Li.Td2>
                    <Li.Td2><Li.MainImg src={img}></Li.MainImg></Li.Td2>
                    <Li.Td2 width="true"><Link to={`/used/useditem?seq=${seq}`}>{title}</Link></Li.Td2>
                    <Li.Td2 width="true">{productName}</Li.Td2>
                    <Li.Td2>{size}</Li.Td2>
                    <Li.Td2>{kind}</Li.Td2>
                    <Li.Td2>{price}</Li.Td2>
                    <Li.Td2>{likes}</Li.Td2>
                    {/* {sellingState?<Li.Td2>판매중</Li.Td2>:<Li.Td2>판매완료</Li.Td2>} */}
                    <Li.Td2>
                    <select onChange={e=>onSelect(e)} value={sellingState}>
                        {selectList.map((item) => (
                            <option value={item} key={item}>
                                    {item?'판매중':'판매완료'}
                            </option>
                        ))}
                    </select>
                    </Li.Td2>
                    <Li.Td2>{reportNum}</Li.Td2>
                    <Li.Td2><button onClick={e=>onDelete(e)}>삭제</button></Li.Td2>
            </Li.Tr2>
        
    );
};

export default UsedItemListing;
