import React, { useState, useEffect } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import api from '~/services/api';

export default function Notifications() {
    const [notification, setNotification] = useState([]);

    const { id } = useSelector((state) => state.user.profile);

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
                const friendReqReceived = await response.data.filter(
                    (value) => {
                        return value.user_friend === id ? value : null;
                    }
                );

                setNotification(friendReqReceived.length);
            } catch (err) {
                toast.error('Failure!');
            }
        }

        SearchFun();
    }, [id]);

    console.tron.log(notification);

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
