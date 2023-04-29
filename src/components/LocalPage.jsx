import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import{Table} from 'react-bootstrap'
import axios from 'axios';

const LocalPage = () => {
    const [locals, setLocals]=useState([]);
    const getLocal =async() =>{
        const url="https://dapi.kakao.com//v2/local/search/keyword.json";
        const config={
            headers: {"Authorization": "KakaoAK a9a4461d19237ef6842553e3146a2c00"},
            params: {query: '버거킹', page:1, size:5}
        }
        const result= await axios.get(url,config);
        console.log(result)
        setLocals(result.data.documents);
    }
    useEffect(()=>{
        getLocal();
    },[])

    return (
        <Row>
            <Col>
            <h1 className='text-center mx-5'>지역검색</h1>
            <Table striped borderd hover>
                <thead>
                    <tr className='text-center'>
                        <td>장소명</td>
                        <td>주소</td>
                        <td>전화번호</td>
                    </tr>
                </thead>
                <tbody>
                    {locals.map(local=>
                    <tr key={local.id}>
                        <td>{local.place_name}</td>
                        <td>{local.phone}</td>
                        <td>{local.address_name}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
            </Col>
        </Row>
    )
}

export default LocalPage