import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MoreHoriz } from '@material-ui/icons';
import Popup from 'reactjs-popup';
import api from '~/services/api';

import { Content, Avatar } from './styles';

export default function CardFriends({ dataR6 }) {
    const [playerData, setPlayerData] = useState([{}]);

    useEffect(() => {
        async function getPlayerData(array) {
            const { data } = await api.get('/stats', {
                params: {
                    username: dataR6.uplay,
                    platform: 'pc',
                    type: 'seasonal',
                },
            });

            const { ncsa, emea, apac } = data.seasons[
                Object.keys(data.seasons)[0]
            ].regions;

            switch (dataR6.region) {
                case 'South America':
                case 'North America':
                    setPlayerData({
                        username: data.username,
                        avatar_url: data.avatar_url_256,
                        seasonData: ncsa[0], // It will return the most updated data from this user.
                    });
                    break;
                case 'Europe':
                case 'Africa':
                    setPlayerData({
                        username: data.username,
                        avatar_url: data.avatar_url_256,
                        seasonData: emea[0], // It will return the most updated data from this user.
                    });
                    break;
                case 'Asia':
                case 'Oceania':
                    setPlayerData({
                        username: data.username,
                        avatar_url: data.avatar_url_256,
                        seasonData: apac[0], // It will return the most updated data from this user.
                    });
                    break;
                default:
                    setPlayerData({
                        avatar_url: data.avatar_url_256,
                        ncsa,
                        emea,
                        apac,
                    });
            }
        }

        getPlayerData();
    }, [dataR6]);

    async function addFriend(user_friend) {
        try {
            await api.post('/friendship', { user_friend });

            return toast.success(`Added ${dataR6.name} successfully`);
        } catch (err) {
            return toast.error('Failure to add your friend!');
        }
    }

    return (
        <Content
            key={dataR6.id}
            status_ranked={dataR6.ranked}
            status_competition={dataR6.competition}
            // onClick={() => addFriend(dataR6.id)}
        >
            <Avatar>
                <img
                    alt="rank1"
                    src={
                        playerData.seasonData
                            ? playerData.seasonData.rank_image
                            : 'https://cdn.r6stats.com/seasons/ranks/unranked.svg'
                    }
                    className="americaRank"
                />
                <img
                    alt="avatar"
                    // src="https://ubisoft-avatars.akamaized.net/befa1d9e-179f-4f34-a5f2-4c14848cc9f6/default_256_256.png"
                    src={
                        playerData.avatar_url
                            ? playerData.avatar_url
                            : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                />
            </Avatar>
            <Popup
                key={dataR6.id}
                trigger={
                    <button type="button" className="more-button">
                        <div className="iconMoreHoriz">
                            <MoreHoriz color="primary" fontSize="large" />
                        </div>
                    </button>
                }
                // position="bottom center"
                on="hover"
                contentStyle={{
                    width: '4.41vw',
                    borderRadius: '5%',
                }}
            >
                <MoreHoriz color="secondary" />
            </Popup>

            <h1>{dataR6.name}</h1>
            <h2>{`Play Style is ${dataR6.play_style}.`}</h2>
            <h2>Available to play:</h2>

            <div className="ranked">RANKED</div>
            <div className="competition">CHAMPIONSHIP</div>
            <div className="times">{dataR6.times}</div>
            <div className="region">{dataR6.region}</div>
        </Content>
    );
}
