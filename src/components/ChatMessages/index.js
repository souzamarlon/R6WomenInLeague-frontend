import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import SendIcon from '@material-ui/icons/Send';
import { green } from '@material-ui/core/colors';
import io from 'socket.io-client';

import api from '~/services/api';
import { Container, Content, FriendInfo, MessageField } from './styles';

export default function ChatMessages({ friendId }) {
    const [chatId, setChatId] = useState(0);
    const [allMessages, setAllMessages] = useState([]);
    const [friendInfo, setFriendInfo] = useState({});
    const [avatar, setAvatar] = useState({});

    const profile = useSelector((state) => state.user.profile);

    const socket = io(process.env.REACT_APP_API_URL, {
        query: { user: profile.id },
    });

    socket.on('sendMessage', (data) => {
        setChatId(chatId <= 0 ? data.chatId : chatId);
        setAllMessages([...allMessages, data]);
    });

    useEffect(() => {
        async function getMessages() {
            const response = await api.get(`/chat/${friendId}`);

            if (response.data) {
                setChatId(response.data.messagesReceived._id);
                setAllMessages(response.data.messagesReceived.messages);
                setFriendInfo(response.data.userInfo);
            }
        }

        getMessages();
    }, [friendId]);

    useEffect(() => {
        async function getPlayerData(array) {
            if (friendInfo.uplay) {
                const { data } = await api.get('/stats', {
                    params: {
                        username: friendInfo.uplay,
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
    }, [friendInfo]);

    async function handleSubmit({ message }) {
        if (allMessages.length <= 0) {
            const response = await api.post(`/chat/${friendId}`, { message });
            // setChatId(_id);
            setChatId(response.data._id);
            setAllMessages([...allMessages, { message }]);
        }

        await api.put(`/chat/${chatId}`, { message });

        setAllMessages([...allMessages, { message }]);
    }
    return (
        <Container>
            <FriendInfo>
                <img
                    alt="avatar"
                    // src="https://ubisoft-avatars.akamaized.net/befa1d9e-179f-4f34-a5f2-4c14848cc9f6/default_256_256.png"
                    src={avatar.avatar_url}
                />
                <h1>{friendInfo.name}</h1>
            </FriendInfo>
            <Content>
                {allMessages.map((item) => (
                    <>
                        {allMessages ? (
                            <MessageField
                                textAlign={item.user.toString() === friendId}
                            >
                                <h2 className="text">{item.message}</h2>
                            </MessageField>
                        ) : null}
                    </>
                ))}
            </Content>
            <Form onSubmit={handleSubmit}>
                <Input
                    multiline
                    rows={2}
                    type="text"
                    name="message"
                    placeholder="Hi!"
                    className="sendField"
                    // style={{ width: 200 }}
                    maxLength="140"
                />
                <button className="send" type="submit">
                    <SendIcon
                        style={{
                            fontSize: 30,
                            color: green[600],
                            paddingLeft: 5,
                        }}
                    />
                </button>
            </Form>
        </Container>
    );
}
