import React, { useState } from 'react';

import { Container, Content } from './styles';
import Search from '~/components/Search';
import apiR6 from '~/services/apiR6';

export default function Dashboard() {
    const [playerData, setPlayerData] = useState([]);

    async function ApiR6() {
        const apiTest = await apiR6.get('stats/Devii/pc/seasonal');
        console.tron.log(apiTest);
    }

    ApiR6();

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
