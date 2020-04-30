import React, { useState } from 'react';

import { Container, Content } from './styles';
import Search from '~/components/Search';

export default function Dashboard() {
    const [playerData, setPlayerData] = useState([1]);

    console.tron.log(playerData);

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
