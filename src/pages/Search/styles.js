import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 80vh;
    border: 0;
`;

export const Content = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: ${(props) => (props.isAlign ? 'flex-start' : 'center')};
    /* align-items: center; */
    background: rgba(27, 25, 28, 0.74);
    border-radius: 8px;
`;

export const CardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    list-style: none;
`;

export const ButtonSwitchPages = styled.button`
    background: transparent;
    color: #fff;
    border: 0;
`;
