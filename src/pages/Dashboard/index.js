import React, { useState, useEffect } from 'react';

import { Container, Content, Cards } from './styles';
import Search from '~/components/Search';
// import api from '~/services/api';

export default function Dashboard() {
    const [playerData, setPlayerData] = useState([
        // 1,
        // 2,
        // 3,
        // 4,
        // 5,
        // 6,
        // 7,
        // 8,
        // 9,
        // 10,
        // 11,
        // 12,
        // 13,
        // 14,
        // 15,
        // 16,
        // 17,
    ]);

    // const [page, setPage] = useState(1);

    // async function ApiR6() {
    //     const apiTest = await api.get('/stats', {
    //         params: {
    //             username: 'MarlonRCM',
    //             platform: 'pc',
    //             type: 'seasonal',
    //         },
    //     });
    //     console.tron.log(apiTest.data);
    // }

    // ApiR6();

    useEffect(() => {
        async function SearchFun() {
            // const response = await playerData.map((offset, limit) => (
            //     offset: (page - 1) * 5,
            //     limit: 5,
            // ));
            // const response = playerData[Object.keys(playerData)[1]];
            // console.tron.log(response);
        }
        SearchFun();
    }, []);

    return (
        <Container isAlign={!!playerData.length}>
            {playerData.length ? (
                <Cards>
                    {playerData.map((item) => (
                        <Content
                            key={item.id}
                            status_ranked={item.ranked}
                            status_competition={item.competition}
                        >
                            <img
                                alt="avatar"
                                src="https://ubisoft-avatars.akamaized.net/befa1d9e-179f-4f34-a5f2-4c14848cc9f6/default_256_256.png"
                            />
                            <h1>{item.name}</h1>
                            <h2>{`Play Style is ${item.play_style}`}</h2>
                            <h2>Available to play:</h2>
                            <div className="ranked">RANKED</div>
                            <div className="competition">CHAMPIONSHIP</div>
                            <div className="times">{item.times}</div>
                        </Content>
                    ))}
                </Cards>
            ) : (
                <Search onChange={setPlayerData} />
            )}
        </Container>
    );
}
