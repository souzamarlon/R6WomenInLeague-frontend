import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import api from '~/services/api';
import ChatMessages from '~/components/ChatMessages';

import { Container, Content, FriendList, Info } from './styles';

export default function Chat({ match }) {
    const [friendId, setFriendId] = useState();
    const [r6Data, setR6Data] = useState([]);
    const { id } = match.params;

    const userId = useSelector((state) => state.user.profile.id);

    useEffect(() => {
        async function friendIdFunction() {
            setFriendId(id);
        }
        friendIdFunction();
    }, [id]);

    useEffect(() => {
        async function SearchFun() {
            try {
                const response = await api.get(`friendship`, {
                    params: {
                        accepted: true,
                        page: 1,
                        per_page: 20,
                    },
                });

                const friendsData = response.data.map((item) =>
                    item.user_id === userId ? item.friend : item.user
                );

                setR6Data(friendsData);
            } catch (err) {
                toast.error('Failure!');
            }
        }

        SearchFun();
    }, [friendId, userId]);

    return (
        <Container>
            <Content>
                {r6Data.map((item) => (
                    <FriendList>
                        <img
                            alt="avatar"
                            src="https://ubisoft-avatars.akamaized.net/befa1d9e-179f-4f34-a5f2-4c14848cc9f6/default_256_256.png"
                            // src={avatar.avatar_url}
                        />
                        <Info>
                            <h1>{item.name}</h1>
                            <h1>Online</h1>
                        </Info>
                    </FriendList>
                ))}
            </Content>
            {friendId ? <ChatMessages friendId={friendId} /> : null}
        </Container>
    );
}
