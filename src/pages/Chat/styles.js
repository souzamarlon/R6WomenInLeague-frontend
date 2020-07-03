import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    width: 350px;
    height: 500px;
    background: #fff;

    form {
        display: flex;
        flex-direction: column;
        /* margin-top: 20px; */
        margin: 0 20px;

        input {
            background: rgba(255, 255, 255, 0.2);
            border: 0.5px solid #eee;
            /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
            border-radius: 4px;
            height: 40px;
            padding: 0 15px;
            color: #000;
            margin: 0 0 10px;
            &::placeholder {
                color: #999999;
            }
        }
    }
`;

export const Content = styled.div`
    height: 300px;
    background: rgba(0, 25, 255, 0.2);
    overflow: auto;
    width: 350px;
    border-radius: 10px;
    border: 2px;
`;

export const FriendInfo = styled.div`
    height: 65px;
    width: 100%;
    /* justify-content: center; */
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #222;

    img {
        width: 50px;
        height: 55px;
        border-radius: 100%;
        margin: 0 10px;
    }
    h1 {
        margin: 0 10px;
        font-size: 12px;
        color: #fff;
    }
`;

export const MessageField = styled.div`
    text-align: ${(props) => (props.textAlign ? 'left' : 'right')};
    background: ${(props) => (props.textAlign ? '#FFF' : '#264')};
    border-radius: 20px;

    margin: 7px 10px;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    height: 30px;

    .text {
        color: #000;
        font-size: 12px;
        padding-top: 7px;
    }
`;
