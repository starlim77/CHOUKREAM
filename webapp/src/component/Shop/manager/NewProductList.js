import React, {} from 'react';
import * as Li from '../resell/NewListStyle';

const NewProductList = ({
    copy_newProductList,
    checked,
    setChecked,
    checkedId,
    setCheckedId,
    disabledCheck,
    setDisabledCheck,
    item,
}) => {
    //

    // console.log('ㅎㅎㅇ')
    // 왜 2번이 나올까 처음엔 [] 그다음엔 [객체]
    // console.log(copy_newProductList);

    const arr = JSON.stringify(item.imgName).split(',');
    const str = arr[0].slice(1);

    if (!arr[1]) {
        // console.log(str.length`)
        // console.log(str)
        var str2 = str.slice(0, str.length - 1);
        // console.log(str2)
    }

    // 적으면되고 새로고침하면 안됨 ; 왜냐 처음엔 undefinded 라서
    // if(copy_newProductList !== ''){
    //     const arr = JSON.stringify(copy_newProductList.imgName).split(',');
    // }

    // console.log('copy_newProductList ' + copy_newProductList);
    // var check = copy_newProductList !== undefined ? true : false;
    // var arr = copy_newProductList[0];
    // console.log(check+"/"+copy_newProductList);
    // console.log(arr);

    //const arr = JSON.stringify(copy_newProductList[0].imgName).split(',');
    // arr = copy_newProductList.imgName && JSON.stringify(copy_newProductList.imgName).split(',');
    // 사진 여러장 등록 했을때 잘라서 1장
    //console.log(copy_newProductList);
    //console.log('arr= ' + arr);
    // 수정사항
    // console.log(data.seq + ' :'  + typeof(arr) +  " arr : " + arr)

    // const str = arr[0].slice(1);

    // if (!arr[1]) {
    //     // console.log(str.length)
    //     // console.log(str)
    //     var str2 = str.slice(0, str.length - 1);
    //     // console.log(str2)
    // }

    const checkHandler = e => {
        // console.log('e.target.id ' + e.target.id);
        // console.log('e.target.isChecked ' + e.target.checked);
        // console.log('copy_newProductList !!  ' + copy_newProductList);

        copy_newProductList.map((item, index) => {
            // console.log('e.target.id ' + e.target.id);
            // console.log('item.seq ' + item.seq);
            if (e.target.id == item.seq) {
                copy_newProductList[index].isChecked = !checked;
                setChecked(!checked);
                setDisabledCheck(!disabledCheck);
            }

            // console.log(copy_newProductList); 잠깐주석
            // 사용자가 checkbox 클릭할때마다 isChecked 속성을 true false로 바꿔줌
        });
        copy_newProductList.map(item => {
            if (item.isChecked === true) {
                // console.log('제발요 ㅠㅠ ');
                setCheckedId(
                    copy_newProductList.find(item2 => item2.isChecked === true).seq,
                );
                // console.log(checkedId);
                // console.log(copy_newProductList);
            }
        });
    };
    
    // 1/13 여기가 문제임 
    
    return (
        <>
            {/* map 오류 뜰때 && 연산자 씀으로 list가 있을때만 돌릴수 있다 */}
            {/* {copy_newProductList.slice(offset, offset + limit).map(item => ( */}
            <Li.Tr key={item.seq}>
                <Li.Td style={{ width: '200px' }}>
                    <Li.Input
                        type="checkbox"
                        // checked={item.isChecked}
                        id={item.seq}
                        onChange={e => checkHandler(e)}
                    ></Li.Input>
                </Li.Td>
                <Li.Td>{item.seq}</Li.Td>
                <Li.Td>
                    <Li.SmallImg
                        src={`/newProductList/${str2 ? str2 : str}`}
                        // src={`/newProductList/${item.imgName}`}
                    ></Li.SmallImg>
                </Li.Td>
                <Li.Td>{item.brand}</Li.Td>
                <Li.Td>{item.category}</Li.Td>
                <Li.Td>{item.comRegNo}</Li.Td>
                <Li.Td>{item.color}</Li.Td>
                <Li.Td>{item.representative}</Li.Td>
                <Li.Td>{item.price}</Li.Td>
                <Li.Td>{item.registerProductDate}</Li.Td>
                <Li.Td>{item.manufacturer}</Li.Td>
                <Li.Td>{item.title}</Li.Td>
                <Li.Td>{item.subTitle}</Li.Td>
            </Li.Tr>
        </>
    );
};

export default NewProductList;
