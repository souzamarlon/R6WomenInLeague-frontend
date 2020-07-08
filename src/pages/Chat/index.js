import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import api from '~/services/api';

import ChatMessages from '~/components/ChatMessages';
import ChatFriendsList from '~/components/ChatFriendsList';

import { Container, Content, ChatSelectorButton } from './styles';

export default function Chat({ match }) {
    const [friendId, setFriendId] = useState();
    const [r6Data, setR6Data] = useState([]);
    const [newMessages, setNewMessages] = useState(false);
    const [newChatId, setNewChatId] = useState(0);

    const { id } = match.params;

    const userId = useSelector((state) => state.user.profile.id);

    const socket = io(process.env.REACT_APP_API_URL, {
        query: { user: userId },
    });

    socket.on('sendMessage', (data) => {
        if (data.user == friendId) {
            setNewChatId(newChatId <= 0 ? data.chatId : newChatId);

            setNewMessages(data.user == friendId ? data : [...newMessages]);
        }
    });

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
            {friendId ? (
                <ChatMessages
                    friendId={friendId}
                    newMessages={newMessages}
                    newChatId={newChatId}
                />
            ) : null}
        </Container>
    );
}
