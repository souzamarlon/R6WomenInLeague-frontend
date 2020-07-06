import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import api from '~/services/api';
import ChatMessages from '~/components/ChatMessages';
import ChatFriendsList from '~/components/ChatFriendsList';

import { Container, Content, ChatSelectorButton } from './styles';

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

    function chatWithFriend(chatFriendId) {
        setFriendId(chatFriendId);
    }

    return (
        <Container>
            <Content>
                {r6Data.map((item) => (
                    <ChatSelectorButton
                        type="button"
                        onClick={() => chatWithFriend(item.id)}
                    >
                        <ChatFriendsList userInfo={item} />
                    </ChatSelectorButton>
                ))}
            </Content>
            {friendId ? <ChatMessages friendId={friendId} /> : null}
        </Container>
    );
}
