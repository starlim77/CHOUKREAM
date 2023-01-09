import React, {} from 'react';
import * as Li from './NewListStyle';

const NewProductList = ({
    newProductList,
    copy_newProductList,
    offset,
    limit,
    checked,
    setChecked,
    checkedId,
    setCheckedId,
    disabledCheck,
    setDisabledCheck,
}) => {
    // console.log(newProductList);
    // 사진 여러장 등록 했을때 잘라서 1장 보여줌
    // const arr = JSON.stringify(copy_newProductList.imgName).split(',');
    //수정사항
    // console.log(data.seq + ' :'  + typeof(arr) +  " arr : " + arr)

    // const str = arr[0].slice(1);

    // if (!arr[1]) {
    //     // console.log(str.length)
    //     // console.log(str)
    //     var str2 = str.slice(0, str.length - 1);
    //     // console.log(str2)
    // }

    const checkHandler = e => {
        console.log('e.target.id ' + e.target.id);
        console.log('e.target.isChecked ' + e.target.checked);
        // console.log('copy_newProductList ' + copy_newProductList);

        copy_newProductList.map((item, index) => {
            console.log('e.target.id ' + e.target.id);
            console.log('item.seq ' + item.seq);
            if (e.target.id == item.seq) {
                copy_newProductList[index].isChecked = !checked;
                setChecked(!checked);
                setDisabledCheck(!disabledCheck);
            }
            // const test = e.target.id === item.seq ? item.seq : '';

            // console.log("테스트 " + test)
            // copy_newProductList[e.target.id - 1].isChecked;
            console.log(copy_newProductList);
            // 사용자가 checkbox 클릭할때마다 isChecked 속성을 true false로 바꿔줌
        });
        copy_newProductList.map(item => {
            if (item.isChecked === true) {
                console.log('제발요 ㅠㅠ ');
                setCheckedId(
                    copy_newProductList.find(item2 => item2.isChecked === true)
                        .seq,
                );
                console.log(checkedId);
                console.log(copy_newProductList);
            }
        });
    };

    return (
        <>
            <Li.Tbody>
                {/* map 오류 뜰때 && 연산자 씀으로 list가 있을때만 돌릴수 있다 */}
                {copy_newProductList.slice(offset, offset + limit).map(item => (
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
                        {/* <Li.Td>{item.imgName}</Li.Td> */}
                        {/* 이게 이미지 주소 */}
                        <Li.Td>
                            <Li.SmallImg
                                // src={`/newProductList/${str2 ? str2 : str}`}
                                src={`/newProductList/${item.imgName}`}
                            ></Li.SmallImg>
                        </Li.Td>
                        <Li.Td>{item.brand}</Li.Td>
                        <Li.Td>{item.category}</Li.Td>
                        <Li.Td>{item.categoryDetail}</Li.Td>
                        <Li.Td>{item.color}</Li.Td>
                        <Li.Td>{item.modelNum}</Li.Td>
                        <Li.Td>{item.price}</Li.Td>
                        <Li.Td>{item.releaseDate}</Li.Td>
                        <Li.Td>{item.registerProductDate}</Li.Td>
                        <Li.Td>{item.title}</Li.Td>
                        <Li.Td>{item.subTitle}</Li.Td>
                    </Li.Tr>
                ))}
            </Li.Tbody>
        </>
    );
};

export default NewProductList;