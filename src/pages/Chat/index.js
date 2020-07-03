import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import { Container, Content, MessageField } from './styles';

export default function Chat({ match }) {
    const [chatId, setChatId] = useState(0);
    const [allMessages, setAllMessages] = useState([]);

    const profile = useSelector((state) => state.user.profile);

    const { id } = match.params;

    const socket = io(process.env.REACT_APP_API_URL, {
        query: { user: profile.id },
    });

    socket.on('sendMessage', (data) => {
        setChatId(chatId <= 0 ? data.chatId : chatId);
        setAllMessages([...allMessages, data]);
    });

    useEffect(() => {
        async function getMessages() {
            const response = await api.get(`/chat/${id}`);

            if (response.data) {
                setChatId(response.data._id);
                setAllMessages(response.data.messages);
            }
        }

        getMessages();
    }, [id]);

    async function handleSubmit({ message }) {
        if (allMessages.length <= 0) {
            const response = await api.post(`/chat/${id}`, { message });
            // setChatId(_id);
            setChatId(response.data._id);
            setAllMessages([...allMessages, { message }]);
        }

        console.tron.log(chatId, message);
        await api.put(`/chat/${chatId}`, { message });

        setAllMessages([...allMessages, { message }]);
    }

    // Message received
    // socket.on('receivedMessage', (message) => {
    //     setAllMessages([...allMessages, { message }]);
    // });

    return (
        <Container>
            <Content>
                {allMessages.map((item) => (
                    <>
                        {allMessages ? (
                            <MessageField textAlign={item.user == id}>
                                <h2 className="text">{item.message}</h2>
                            </MessageField>
                        ) : null}
                    </>
                ))}
            </Content>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="message"
                    placeholder="Eliza Ash Cohen"
                    maxLength="25"
                />
                <button className="update" type="submit">
                    UPDATE
                </button>
            </Form>
        </Container>
    );
}
