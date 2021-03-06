import React, { useState, useEffect, useRef } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import { green } from '@material-ui/core/colors';
// import io from 'socket.io-client';
import { format, parseISO } from 'date-fns';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import api from '~/services/api';
import { Container, Content, FriendInfo, MessageField } from './styles';

export default function ChatMessages({
    friendId,
    newMessages,
    newChatId,
    friendStatus,
}) {
    const [chatId, setChatId] = useState(0);
    const [allMessages, setAllMessages] = useState([]);
    const [lastMessagesDate, setLastMessagesDate] = useState([]);
    const [friendInfo, setFriendInfo] = useState({});
    const [avatar, setAvatar] = useState({});
    const [status, setStatus] = useState(false);

    const profile = useSelector((state) => state.user.profile);

    const ref = useRef(null);

    // const socket = io(process.env.REACT_APP_API_URL, {
    //     query: { user: profile.id },
    // });

    // socket.on('sendMessage', (data) => {
    //     setChatId(chatId <= 0 ? data.chatId : chatId);

    //     setAllMessages(
    //         data.user == friendId ? [...allMessages, data] : [...allMessages]
    //     );
    // });

    useEffect(() => {
        async function getMessages() {
            try {
                const response = await api.get(`/chat/${friendId}`);

                if (response.data) {
                    setFriendInfo(response.data.userInfo);
                    setChatId(response.data.messagesReceived._id);
                    setAllMessages(response.data.messagesReceived.messages);
                    setStatus(response.data.status);
                    setLastMessagesDate(
                        format(
                            parseISO(response.data.messagesReceived.updatedAt),
                            "MMMM d',' yyyy"
                        )
                    );

                    ref.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                        inline: 'nearest',
                    });
                }
            } catch (err) {
                // hasMessages(false);

                setAllMessages([]);
                setChatId(0);
            }
        }

        getMessages();
    }, [friendId]);

    useEffect(() => {
        async function getPlayerData() {
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
    }, [friendInfo, friendId]);

    useEffect(() => {
        if (!chatId) {
            setChatId(newChatId);
        }
        if (newMessages) {
            setAllMessages([...allMessages, newMessages]);
        }

        if (friendStatus) {
            setStatus(friendStatus);
        }
    }, [newMessages, newChatId, friendStatus]);

    async function handleSubmit({ message }) {
        if (allMessages.length <= 0) {
            const response = await api.post(`/chat/${friendId}`, { message });
            // setChatId(_id);
            setChatId(response.data._id);
            setAllMessages([...allMessages, { user: profile.id, message }]);
        }

        await api.put(`/chat/${chatId}`, { message });

        setAllMessages([...allMessages, { user: profile.id, message }]);
    }

    return (
        <Container>
            <FriendInfo>
                <img
                    alt="avatar"
                    src={
                        avatar.avatar_url
                            ? avatar.avatar_url
                            : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                />

                <h1>{friendInfo.name}</h1>
                {status ? (
                    <RadioButtonCheckedIcon style={{ color: green[500] }} />
                ) : (
                    <RadioButtonCheckedIcon style={{ color: '#f90707' }} />
                )}

                <h2>{`Last message: ${lastMessagesDate}`}</h2>
            </FriendInfo>
            <Content>
                {allMessages ? (
                    <div ref={ref}>
                        {allMessages.map((item) => (
                            <MessageField
                                textAlign={item.user == friendId}
                                key={item._id}
                            >
                                <h2 className="text">{item.message}</h2>
                            </MessageField>
                        ))}
                    </div>
                ) : null}
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
                    maxLength="240"
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

ChatMessages.propTypes = {
    newMessages: PropTypes.string.isRequired,
    friendId: PropTypes.number.isRequired,
    newChatId: PropTypes.number.isRequired,
    friendStatus: PropTypes.bool.isRequired,
};
