import styled from 'styled-components';

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
    /* overflow: hidden visible; */
`;

export const ButtonSwitchPages = styled.button`
    background: transparent;
    color: #fff;
    border: 0;
`;
