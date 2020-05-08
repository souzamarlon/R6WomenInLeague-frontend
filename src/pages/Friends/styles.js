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
`;

export const MenuContainer = styled.div`
    width: 100%;
    height: 20px;

    justify-content: flex-end;
    background: #000;
`;

export const Menu = styled.div`
    height: 25px;
    width: 21.45vw;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 auto;
    background: rgba(221, 221, 221, 0.1);
    border: 1px solid rgba(221, 221, 221, 0.1);
    box-sizing: border-box;
    border-radius: 29px;
`;

export const ButtonSwitchPages = styled.button`
    background: transparent;
    color: #fff;
    border: 0;
`;
