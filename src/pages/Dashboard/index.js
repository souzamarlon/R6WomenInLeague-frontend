import React, { useState } from 'react';

import Select from 'react-select';
import { Container } from './styles';
import Search from '~/components/Search';

export default function Dashboard() {
    const [playerData, setPlayerData] = useState([]);

    //

    console.tron.log(playerData);

    return (
        <Container>
            <Search onChange={setPlayerData} />
        </Container>
    );
}
