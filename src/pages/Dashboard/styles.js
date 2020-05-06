import styled from 'styled-components';

export const Container = styled.div`
    /* position: absolute; */
    margin: 0 auto;
    width: 84%;
    height: 84%;
    background: transparent;
    border: 0;
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
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
    overflow: hidden visible;
`;

export const ButtonSwitchPages = styled.button`
    background: transparent;
    color: #fff;
    border: 0;
`;
