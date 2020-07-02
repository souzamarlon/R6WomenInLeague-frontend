import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import io from '~/services/io';
import api from '~/services/api';

import { Container, Content, MessageField } from './styles';

export default function Chat({ match }) {
    const [chatId, setChatId] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const socket = io;

    const { id } = match.params;

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
            await api.post(`/chat/${id}`, { message });
            setAllMessages([...allMessages, { message }]);
        }

        await api.put(`/chat/${chatId}`, { message });

        setAllMessages([...allMessages, { message }]);
    }

    return (
        <Container>
            <Content>
                {allMessages.map((item) => (
                    <>
                        {allMessages ? (
                            <MessageField textAlign={item.user == id}>
                                <span className="text">{item.message}</span>
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
