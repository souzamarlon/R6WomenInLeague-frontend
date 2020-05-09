import React, { useState, useEffect } from 'react';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

import {
    Container,
    Content,
    CardList,
    Menu,
    SwitchButton,
    ButtonSwitchPages,
} from './styles';

import Card from '~/components/Card';

import api from '~/services/api';

export default function Dashboard() {
    const [r6Data, setR6Data] = useState([]);
    const [page, setPage] = useState(1);
    const [myFriends, setMyFriends] = useState(true);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        async function SearchFun() {
            const response = await api.get(`users`, {
                params: {
                    page,
                    per_page: 14,
                },
            });

            setR6Data(response.data);
        }

        SearchFun();
    }, [page]);

    function handlePage(action) {
        // const count = action === 'back' ? page - 1 : page + 1;
        setPage(action === 'back' ? page - 1 : page + 1);
    }
    console.tron.log('t', !!request);

    return (
        <Container>
            <Menu>
                <SwitchButton
                    onClick={() => setMyFriends(true) || setRequest(false)}
                >
                    <span className={myFriends ? 'active' : 'notActive'}>
                        My Friends
                    </span>
                </SwitchButton>
                <line />
                <SwitchButton
                    onClick={() => setRequest(true) || setMyFriends(false)}
                >
                    <span className={request ? 'active' : 'notActive'}>
                        Friend Requests
                    </span>
                </SwitchButton>
            </Menu>
            <Content>
                <CardList>
                    {r6Data.map((item) => (
                        <Card key={item.id} dataR6={item} />
                    ))}
                </CardList>
            </Content>
            <ButtonSwitchPages
                disabled={page < 1}
                onClick={() => handlePage('back')}
            >
                <KeyboardArrowLeft style={{ fontSize: 44 }} />
            </ButtonSwitchPages>

            <ButtonSwitchPages
                disabled={r6Data.length <= 1}
                onClick={() => handlePage('next')}
            >
                <KeyboardArrowRight style={{ fontSize: 44 }} />
            </ButtonSwitchPages>
        </Container>
    );
}
