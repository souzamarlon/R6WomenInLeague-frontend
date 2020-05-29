import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

import { Container, Content, CardList, ButtonSwitchPages } from './styles';

import Card from '~/components/Card';

import api from '~/services/api';

export default function Dashboard() {
    const [r6Data, setR6Data] = useState([]);
    const [friendAdded, setFriendAdded] = useState([]);

    const [page, setPage] = useState(1);

    useEffect(() => {
        async function SearchFun() {
            try {
                const response = await api.get(`users`, {
                    params: {
                        page,
                        per_page: 14,
                    },
                });

                if (response.data.length <= 0) {
                    return alert('Hi, We did not find more users!');
                }

                setR6Data(response.data);
            } catch (err) {
                const { error } = err.response.data;

                toast.error(`Failure!, ${error}`);
            }
        }

        SearchFun();
    }, [page]);

    useEffect(() => {
        if (friendAdded) {
            console.tron.log(friendAdded);
        }
    }, [friendAdded]);

    function handlePage(action) {
        // const count = action === 'back' ? page - 1 : page + 1;
        setPage(action === 'back' ? page - 1 : page + 1);
    }

    return (
        <Container>
            <Content>
                <CardList>
                    {r6Data.map((item) => (
                        <Card
                            key={item.id}
                            dataR6={item}
                            friendAdded={(value) => setFriendAdded(value)}
                        />
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
