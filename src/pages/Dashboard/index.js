import React, { useState } from 'react';

import { Container, Content } from './styles';
import Search from '~/components/Search';
import api from '~/services/api';

export default function Dashboard() {
    const [playerData, setPlayerData] = useState([]);

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
                <Content />
            ) : (
                <Search onChange={setPlayerData} />
            )}
        </Container>
    );
}
