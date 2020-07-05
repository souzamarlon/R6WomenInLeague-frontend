import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    flex-direction: row;
    display: flex;
    width: 800px;
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
    height: 60px;
    margin: 2px auto;
    border-radius: 4px;
    background: #333;
    box-shadow: 5px 10px 10px 3px rgba(0, 0, 0, 0.4);
    justify-content: space-around;

    align-items: center;

    flex-direction: row;
    display: flex;

    h1 {
        font-size: 14px;
        color: #fff;
    }
    img {
        width: 50px;
        height: 55px;
        border-radius: 100%;
        margin: 0 2px;
    }
`;

export const Info = styled.div`
    margin-right: 20px;
`;
