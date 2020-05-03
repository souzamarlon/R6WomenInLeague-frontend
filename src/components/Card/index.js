import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { Content } from './styles';

export default function Card({ dataR6 }) {
    const [updateR6, setUpdateR6] = useState([{}]);

    useEffect(() => {
        async function Avatar(array) {
            const { data } = await api.get('/stats', {
                params: {
                    username: dataR6.uplay,
                    platform: 'pc',
                    type: 'seasonal',
                },
            });

            setUpdateR6({ avatar_url: data.avatar_url_256 });
        }
        Avatar();
    }, [dataR6]);

    console.tron.log(updateR6);

    return (
        <Content
            key={dataR6.id}
            status_ranked={dataR6.ranked}
            status_competition={dataR6.competition}
        >
            <img
                alt="avatar"
                // src="https://ubisoft-avatars.akamaized.net/befa1d9e-179f-4f34-a5f2-4c14848cc9f6/default_256_256.png"
                src={
                    updateR6.avatar_url
                        ? updateR6.avatar_url
                        : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                }
            />
            <h1>{dataR6.name}</h1>
            <h2>{`Play Style is ${dataR6.play_style}`}</h2>
            <h2>Available to play:</h2>
            <div className="ranked">RANKED</div>
            <div className="competition">CHAMPIONSHIP</div>
            <div className="times">{dataR6.times}</div>
        </Content>
    );
}
