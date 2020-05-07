import React, { useState, useEffect } from 'react';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

import { Container, Content, CardList, ButtonSwitchPages } from './styles';

import SearchTool from '~/components/SearchTool';
import Card from '~/components/Card';

import api from '~/services/api';

export default function Search() {
    const [playerData, setPlayerData] = useState([]);
    const [r6Data, setR6Data] = useState([]);
    const [page, setPage] = useState(1);

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
                        page,
                        per_page: 14,
                    },
                });

                setR6Data(response.data);
            }
        }

        SearchFun();
    }, [playerData, page]);

    function handlePage(action) {
        // const count = action === 'back' ? page - 1 : page + 1;
        setPage(action === 'back' ? page - 1 : page + 1);
    }
    console.tron.log(playerData);

    return (
        <Container>
            <ButtonSwitchPages
                disabled={page < 1}
                onClick={() => handlePage('back')}
            >
                <KeyboardArrowLeft style={{ fontSize: 44 }} />
            </ButtonSwitchPages>

            <Content isAlign={!!playerData.length}>
                {playerData.length !== 0 ? (
                    <CardList>
                        {r6Data.map((item) => (
                            <Card key={item.id} dataR6={item} />
                        ))}
                    </CardList>
                ) : (
                    <SearchTool onChange={setPlayerData} />
                )}
            </Content>

            <ButtonSwitchPages
                disabled={r6Data.length <= 1}
                onClick={() => handlePage('next')}
            >
                <KeyboardArrowRight style={{ fontSize: 44 }} />
            </ButtonSwitchPages>
        </Container>
    );
}
