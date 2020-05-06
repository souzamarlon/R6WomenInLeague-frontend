import React, { useState, useEffect } from 'react';

import { Container, CardList } from './styles';
import Search from '~/components/Search';
import Card from '~/components/Card';

import api from '~/services/api';

export default function Dashboard() {
    const [playerData, setPlayerData] = useState([]);
    const [r6Data, setR6Data] = useState([]);

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

    useEffect(() => {
        async function SearchFun() {
            if (playerData.length !== 0) {
                const response = await api.get(`users`, {
                    params: {
                        play_style: playerData.play_style,
                        ranked: playerData.ranked,
                        competition: playerData.competition,
                        times: playerData.times,
                    },
                });

                setR6Data(response.data);
            }
        }

        SearchFun();
    }, [playerData]);

    return (
        <Container isAlign={!!playerData.length}>
            {r6Data.length ? (
                <CardList>
                    {r6Data.map((item) => (
                        <Card key={item.id} dataR6={item} />
                    ))}
                </CardList>
            ) : (
                <Search onChange={setPlayerData} />
            )}
        </Container>
    );
}
