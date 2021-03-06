import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 195px;
    height: 347px;
    background: rgba(10, 10, 10, 0.5);
    /* box-sizing: border-box; */
    box-shadow: 5px 5px 8px rgb(10, 10, 10);
    border-radius: 9px;
    margin: 10px 5px;
    border: 0;
    transition: background 0.3s;
    align-items: center;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    position: relative;

    &:hover {
        background: ${darken(0.3, '#8C0ABA')};
        /* top: 10px; */
        /* position: relative; */
    }

    h1 {
        padding-top: 12px;
        color: #fff;
        font-size: 1.4rem;
    }

    .playAvailableInfo {
        font-size: 1.2rem;
        padding-top: 5px;
        color: rgba(250, 248, 248, 0.56);
        overflow: hidden;
    }

    div.ranked {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 5px auto;
        /* padding-top: 2px; */
        color: #fff;
        width: 81px;
        height: 16.34px;
        opacity: ${(props) => (props.status_ranked ? 1 : 0.1)};
        background-color: ${(props) =>
            props.status_ranked
                ? 'rgba(78, 253, 34, 0.42)'
                : 'rgba(0, 0, 0, 0.8)'};
        border-radius: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.competition {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 5px auto;
        /* padding-top: 2px; */
        width: 95px;
        height: 16.34px;
        color: #fff;
        opacity: ${(props) => (props.status_competition ? 1 : 0.1)};
        background-color: ${(props) =>
            props.status_competition
                ? 'rgba(78, 253, 34, 0.42)'
                : 'rgba(0, 0, 0, 0.8)'};
        border-radius: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.times {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 5px auto;
        /* padding-top: 2px; */
        width: 81px;
        height: 16.34px;
        color: #fff;
        background-color: rgba(24, 29, 163, 0.42);
        border-radius: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.region {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 5px auto;
        /* padding-top: 2px; */
        width: 81px;
        height: 16.34px;
        color: #fff;
        background-color: rgba(255, 25, 34, 0.33);
        border-radius: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        background-color: rgba(78, 253, 34, 0.42);
        font-size: 10px;
        height: 14px;
        border: 0;
    }

    button.more-button {
        background: transparent;
        padding-top: 5px;
        border: 0px;
        position: absolute;
        width: 80%;
        margin-right: 0 auto;
        div.iconMoreHoriz {
            /* padding-top: 10px; */
            border-radius: 50%;
        }
    }
`;

export const Avatar = styled.div`
    position: relative;

    img {
        width: 170px;
        height: 175px;
        border-radius: 100%;
    }

    img.americaRank {
        position: absolute;
        margin-left: 120px;
        width: 70px;
        height: 70px;
    }
`;

export const PopupOptions = styled.div`
    .options {
        margin-top: 4px;
        color: #999;
        border: 0;
        background: transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        width: 100%;
    }
`;

export const AddRemove = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 0 5px;

    .addButton {
        border-radius: 50%;
        border: 0;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 2px 2px 10px rgb(0, 0, 0, 0.5);
        width: 45px;
        height: 45px;
        padding-top: 5px;
        margin-top: 40px;
        /* -webkit-animation: spin 1s linear ;
        -moz-animation: spin 1s linear ;
        animation: spin 1s linear ; */

        &:hover {
            background: ${darken(0.2, '#fff')};
        }
        /* @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
        @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
        @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } */
    }
`;

export const AvailableInfo = styled.div`
    flex-direction: column;
`;

export const PlayerInfo = styled.div`
    flex-direction: row;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`;

export const AlignUplayIcon = styled.div`
    flex-direction: row;
    display: flex;
    margin: 0 auto;
    justify-content: center;

    .playerInfo {
        font-size: 1rem;
        /* color: rgba(255, 25, 248, 0.66); */
        color: rgba(255, 255, 25, 0.66);
        padding-top: 2px;
        background: rgba(10, 10, 10, 0.2);
    }
`;

export const AlignDiscordIcon = styled.div`
    flex-direction: row;
    display: flex;
    margin: 0 auto;
    justify-content: center;

    .playerInfo {
        font-size: 1rem;
        /* color: rgba(255, 25, 248, 0.66); */
        color: rgba(255, 255, 25, 0.66);
        padding-top: 2px;
        background: rgba(10, 10, 10, 0.2);
    }
`;
