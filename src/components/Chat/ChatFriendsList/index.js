import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { Container, Info } from './styles';

export default function ChatFriendsList({ userInfo }) {
    const [avatar, setAvatar] = useState({});

    useEffect(() => {
        async function getPlayerData() {
            try {
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
            } catch (err) {
                // const { error } = err.response.data;
                // console.log('Error', error);
            }
        }

        getPlayerData();
    }, [userInfo]);

    return (
        <Container>
            <img
                alt="avatar"
                // src="https://ubisoft-avatars.akamaized.net/befa1d9e-179f-4f34-a5f2-4c14848cc9f6/default_256_256.png"
                src={
                    avatar.avatar_url
                        ? avatar.avatar_url
                        : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                }
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

ChatFriendsList.propTypes = {
    userInfo: PropTypes.shape({
        uplay: PropTypes.string,
        name: PropTypes.string,
        status: PropTypes.bool,
    }).isRequired,
};
