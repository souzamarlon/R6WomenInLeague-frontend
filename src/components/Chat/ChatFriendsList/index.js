import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { Container, Info } from './styles';

export default function ChatFriendsList({ userInfo }) {
    const [avatar, setAvatar] = useState({});

    useEffect(() => {
        async function getPlayerData() {
            if (userInfo.uplay) {
                const { data } = await api.get('/stats', {
                    params: {
                        username: userInfo.uplay,
                        platform: 'pc',
                        type: 'seasonal',
                    },
                });

                setAvatar({
                    avatar_url: data.avatar_url_256,
                });
            }
        }

        getPlayerData();
    }, [userInfo]);

    return (
        <Container>
            <img
                alt="avatar"
                // src="https://ubisoft-avatars.akamaized.net/befa1d9e-179f-4f34-a5f2-4c14848cc9f6/default_256_256.png"
                src={avatar.avatar_url}
            />
            <Info>
                <h1>{userInfo.name}</h1>
                {userInfo.status ? (
                    <h1 className="online">Online</h1>
                ) : (
                    <h1 className="offline">Offline</h1>
                )}
            </Info>
        </Container>
    );
}
