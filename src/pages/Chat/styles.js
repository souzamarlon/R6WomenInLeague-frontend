import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    flex-direction: row;
    justify-content: center;
    display: flex;
    width: 800px;
`;

export const Content = styled.div`
    width: 200px;
    height: 700px;
    /* padding-top: 5px; */
    border-radius: 4px;

    background: #288;
    overflow: auto;
`;

export const ChatSelectorButton = styled.button`
    border: 0;
    background: #444;
    border-radius: 4px;
`;
