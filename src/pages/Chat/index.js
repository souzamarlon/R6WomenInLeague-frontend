import React, { useState, useEffect } from 'react';

// import api from '~/services/api';

import ChatMessages from '~/components/ChatMessages';

import { Container } from './styles';

export default function Chat({ match }) {
    const [friendId, setFriendId] = useState();
    const { id } = match.params;

    useEffect(() => {
        async function friendIdFunction() {
            setFriendId(id);
        }
        friendIdFunction();
    }, [id]);

    return (
        <Container>
            {friendId ? <ChatMessages friendId={friendId} /> : null}
        </Container>
    );
}
