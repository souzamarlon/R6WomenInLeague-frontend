import React, { useState, useEffect } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { toast } from 'react-toastify';

import { Container } from './styles';
import api from '~/services/api';

export default function Notifications() {
    const [notification, setNotification] = useState([]);
    useEffect(() => {
        async function SearchFun() {
            try {
                const response = await api.get(`friendship`, {
                    params: {
                        page: 1,
                        per_page: 14,
                    },
                });
                if (!response.data) {
                    throw new Error('Whoops!');
                }
                setNotification(response.data.length);
            } catch (err) {
                toast.error('Failure!');
            }
        }

        SearchFun();
    }, [notification]);

    return (
        <Container>
            {notification <= 0 ? (
                <>
                    <NotificationsIcon color="disabled" />
                </>
            ) : (
                <>
                    <NotificationsIcon color="secondary" />
                    <h2>{notification}</h2>
                </>
            )}
        </Container>
    );
}
