import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    margin: auto;
    width: 605px;
    height: 700px;
    background: #fff;
    border-radius: 4px;

    form {
        display: flex;
        flex-direction: row;
        /* margin-top: 20px; */
        margin: 20px 20px;

        .sendField {
            background: rgba(255, 255, 255, 0.2);
            border: 0.5px solid #eee;
            /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
            border-radius: 4px;
            height: 45px;
            width: 80%;
            padding: 0 15px;
            color: #000;
            margin: 0 0 10px;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
            &::placeholder {
                color: #999999;
            }
        }

        button {
            /* background: rgba(5, 250, 88, 0.8); */
            border: 0;
            height: 40px;
            width: 40px;
            border-radius: 25px;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            display: flex;
            box-shadow: 5px 10px 10px 3px rgba(0, 0, 0, 0.4);
            transition: background 0.2s;

            -moz-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;

            &:hover {
                background: ${darken(0.02, 'rgba(5, 250, 88, 0.3)')};
                -moz-transform: scale(1.1);
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }
        }
    }
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
        margin: 0 5px;
        font-size: 12px;
        color: #fff;
    }
    h2 {
        margin-left: 20px;
        font-size: 12px;
        color: #fff;
    }
`;

export const Content = styled.div`
    height: 540px;
    background: rgba(222, 222, 255, 0.3);
    overflow: auto;
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    /* border-radius: 10px; */
    /* border: 2px; */
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
