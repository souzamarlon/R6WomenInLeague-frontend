import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import {
    MoreHoriz,
    Favorite,
    ThumbDown,
    HourglassFull,
    SportsEsports,
} from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import api from '~/services/api';
import history from '~/services/history';

import {
    Container,
    Avatar,
    PopupOptions,
    AddRemove,
    AvailableInfo,
    PlayerInfo,
    AlignUplayIcon,
    AlignDiscordIcon,
} from './styles';

export default function CardFriends({ cardId, dataR6, allData }) {
    const [playerData, setPlayerData] = useState([{}]);

    useEffect(() => {
        async function getPlayerData() {
            try {
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
            } catch (err) {
                // const { error } = err.response.data;
                // console.log('Error', error);
            }
        }

        getPlayerData();
    }, [dataR6]);

    async function removeFriend(id) {
        try {
            if (window.confirm(`Are you sure to remove ${dataR6.name}?`)) {
                await api.delete(`/friendship/${id}`);

                toast.success(`${dataR6.name} was removed successfully.`);
                history.go('/friends');
            }
        } catch (err) {
            toast.error('Failure to remove your friend!');
        }
    }

    async function reportFake(id) {
        try {
            if (window.confirm(`Are you sure to report ${dataR6.name}?`)) {
                await api.put(`/friendship/${id}`, {
                    expose_fake: true,
                    id_reported: dataR6.id,
                });

                toast.success(`${dataR6.name} was reported successfully.`);
                history.go('/friends');
            }
        } catch (err) {
            toast.error('Failure to remove your friend!');
        }
    }

    async function acceptFriend(id) {
        try {
            if (window.confirm(`Are you sure to accept ${dataR6.name}?`)) {
                await api.put(`/friendship/${id}`, { accepted: true });

                toast.success(`Accepted ${dataR6.name} successfully`);
                history.go('/friends');
            }
        } catch (err) {
            toast.error('Failure to accept your friend!');
        }
    }

    return (
        <Container
            key={dataR6.id}
            status_ranked={dataR6.ranked}
            status_competition={dataR6.competition}
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
                    width: '3.50vw',
                    borderRadius: '5%',
                    marginTop: 2,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    border: 0,
                }}
            >
                <PopupOptions>
                    <button
                        type="button"
                        className="options"
                        onClick={() => removeFriend(cardId)}
                    >
                        Remove
                    </button>
                    <button
                        type="button"
                        className="options"
                        onClick={() => reportFake(cardId)}
                    >
                        Report a fake
                    </button>
                    <button type="button" className="options">
                        <Link to={`/chat/${dataR6.id}`}> Chat </Link>
                    </button>
                </PopupOptions>
            </Popup>

            {allData.accepted ? (
                <>
                    <h1>{dataR6.name}</h1>

                    <AlignUplayIcon>
                        <SportsEsports
                            style={{
                                color: '#FFF',
                                fontSize: 16,
                            }}
                        />
                        <h2 className="playerInfo">{dataR6.uplay}</h2>
                    </AlignUplayIcon>

                    {dataR6.discord_user ? (
                        <AlignDiscordIcon>
                            <FontAwesomeIcon
                                icon={faDiscord}
                                style={{
                                    color: '#FFF',
                                    fontSize: 16,
                                }}
                            />
                            <h2 className="playerInfo">
                                {`:${dataR6.discord_user}`}
                            </h2>
                        </AlignDiscordIcon>
                    ) : null}
                    <h2 className="playAvailableInfo">{`Play Style is ${dataR6.play_style}.`}</h2>
                    <h2 className="playAvailableInfo">Available to play:</h2>
                    <PlayerInfo>
                        <div className="ranked">RANKED</div>
                        <div className="competition">CHAMPIONSHIP</div>
                        <div className="times">{dataR6.times}</div>
                        <div className="region">{dataR6.region}</div>
                    </PlayerInfo>
                </>
            ) : (
                <>
                    <h1>{dataR6.name}</h1>
                    <h2 className="playAvailableInfo">{`Play Style is ${dataR6.play_style}.`}</h2>
                    <h2 className="playAvailableInfo">Available to play:</h2>
                    <AddRemove>
                        <button
                            type="button"
                            className="addButton"
                            onClick={() => removeFriend(cardId)}
                        >
                            <ThumbDown
                                color="secondary"
                                style={{ fontSize: 35 }}
                            />
                        </button>

                        <AvailableInfo>
                            <div className="ranked">RANKED</div>
                            <div className="competition">CHAMPIONSHIP</div>
                            <div className="times">{dataR6.times}</div>
                            <div className="region">{dataR6.region}</div>
                        </AvailableInfo>
                        {allData.user.id === dataR6.id ? (
                            <button
                                type="button"
                                className="addButton"
                                onClick={() => acceptFriend(cardId)}
                            >
                                <Favorite
                                    style={{ fontSize: 37, color: green[500] }}
                                />
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="addButton"
                                disabled
                            >
                                <HourglassFull
                                    color="disabled"
                                    style={{ fontSize: 34 }}
                                />
                            </button>
                        )}
                    </AddRemove>
                </>
            )}
        </Container>
    );
}

CardFriends.propTypes = {
    dataR6: PropTypes.shape({
        uplay: PropTypes.string,
        region: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.number,
        ranked: PropTypes.bool,
        competition: PropTypes.bool,
        play_style: PropTypes.string,
        times: PropTypes.string,
        discord_user: PropTypes.string,
    }).isRequired,
    cardId: PropTypes.number.isRequired,
    allData: PropTypes.shape({
        accepted: PropTypes.bool,
        user: PropTypes.shape({
            id: PropTypes.number,
        }),
    }).isRequired,
};
