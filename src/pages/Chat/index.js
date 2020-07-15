import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import api from '~/services/api';

import ChatMessages from '~/components/Chat/ChatMessages';
import ChatFriendsList from '~/components/Chat/ChatFriendsList';

import { Container, Content, ChatSelectorButton } from './styles';

export default function Chat({ match }) {
    const [friendId, setFriendId] = useState();
    const [r6Data, setR6Data] = useState([]);
    const [newMessages, setNewMessages] = useState(false);
    const [newChatId, setNewChatId] = useState(0);
    const [status, setStatus] = useState({});

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

    socket.on('status', (data) => {
        if (data.userId === friendId) {
            setStatus(data.status);
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
                    item.user_id === userId
                        ? {
                              id: item.friend.id,
                              name: item.friend.name,
                              uplay: item.friend.uplay,
                              ranked: item.friend.ranked,
                              competition: item.friend.competition,
                              times: item.friend.times,
                              play_style: item.friend.play_style,
                              discord_user: item.friend.discord_user,
                              region: item.friend.region,
                              status: item.status,
                          }
                        : {
                              id: item.user.id,
                              name: item.user.name,
                              uplay: item.user.uplay,
                              ranked: item.user.ranked,
                              competition: item.user.competition,
                              times: item.user.times,
                              play_style: item.user.play_style,
                              discord_user: item.user.discord_user,
                              region: item.user.region,
                              status: item.status,
                          }
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
                        key={item.id}
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
                    friendStatus={status}
                />
            ) : null}
        </Container>
    );
}
