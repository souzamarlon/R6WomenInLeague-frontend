import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 80vh;
    border: 0;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    border-radius: 8px;
    height: 100%;
    background: rgba(27, 25, 28, 0.74);
    justify-content: center;
`;

export const CardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    list-style: none;
`;

export const Menu = styled.div`
    height: 25px;
    width: 12.45vw;
    flex-direction: row;
    margin: 0 auto;
    background: rgba(221, 221, 221, 0.4);
    border: 1px solid rgba(221, 221, 221, 0.2);
    box-sizing: border-box;
    border-radius: 29px;
    justify-content: space-between;
    display: flex;

    line {
        width: 1px;
        height: 22px;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
`;

export const SwitchButton = styled.button`
    width: 100px;
    /* padding-top: 5px; */
    font-weight: bold;
    font-size: 12px;

    border: 0;
    border-radius: 20px;
    background: rgba(0, 0, 2, 0.2);
    box-shadow: 0 0 12px;
    transition: background 0.3s;
    &:hover {
        background: ${darken(0.03, '#f94d6a')};
        -moz-transform: scale(0.9);
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
        font-size: 10px;
    }
    .notActive {
        color: #000;
        opacity: 0.6;
    }

    .active {
        color: #fff;
    }
`;

export const ButtonSwitchPages = styled.button`
    background: transparent;
    color: #fff;
    border: 0;
`;
