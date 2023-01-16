import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyPhoto = (props) => {

    const [list, setList] = useState([]);
    

    useEffect( ()=> {
        console.log(props.seq)

        /*
        axios.get(`http://localhost:8080/lookbook/findAllMyList/${props.id}`)
             .then(
                // res => setList(res.data)
                // res => console.log(res)
                // res => console.log(list.storedFileName[1])
                )
             .catch(error => console.log(error))
*/

        axios.get(`http://localhost:8080/lookbook/findPhoto/${props.seq}`)
                .then(
                // res => setList(res.data)
                // res => console.log(res)
                // res => console.log(list.storedFileName[1])
                )
                .catch(error => console.log(error))
    })

    return (
        <div>
            ㅎㅎㅎㅎ
             {/* {
                list.storedFileName.map( (item, index) => (
                    <p key={index} >
                        <img src={'/storage/'+item} alt='list사진' style={{width:'100%'}} />
                        
                    </p>
                ))
            } */}
        </div>
    );
};

export default MyPhoto;