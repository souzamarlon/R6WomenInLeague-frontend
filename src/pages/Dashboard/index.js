import React, { useState } from 'react';

import { Container, Content } from './styles';
import Search from '~/components/Search';
// import api from '~/services/api';

export default function Dashboard() {
    const [playerData, setPlayerData] = useState([1]);

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

    return (
        <Container isAlign={!!playerData.length}>
            {playerData.length ? (
                <Content>
                    <img
                        alt="avatar"
                        src="https://ubisoft-avatars.akamaized.net/befa1d9e-179f-4f34-a5f2-4c14848cc9f6/default_256_256.png"
                    />
                </Content>
            ) : (
                <Search onChange={setPlayerData} />
            )}
        </Container>
    );
}
