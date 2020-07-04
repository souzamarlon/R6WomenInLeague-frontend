import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    flex-direction: row;
    display: flex;
    width: 600px;
`;

export const Content = styled.div`
    width: 200px;
    height: 500px;
    border-radius: 4px;
    background: #fff;
    overflow: auto;
`;

export const FriendList = styled.div`
    width: 190px;
    height: 70px;
    margin: 2px auto;
    border-radius: 4px;
    background: #222;
    span {
        font-size: 14px;
        color: #fff;
    }
`;
