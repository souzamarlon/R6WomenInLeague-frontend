import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background-image: url(${(props) => props.background});
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.text`
    color: #fff;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.4em;
`;

export const Box = styled.div`
    justify-content: center;
    align-self: center;
    text-align: right;
    width: 40%;
    margin: auto;
`;

export const Container = styled.div`
    background: rgba(27, 25, 28, 0.74);
    width: 400px;
    height: 561px;
    display: flex;
    margin: 10px auto;

    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 10px;
`;
export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;
    form {
        display: flex;
        flex-direction: column;
        /* margin-top: 20px; */
        input {
            background: rgba(255, 255, 255, 0.2);
            border: 0.5px solid #eee;
            /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #ffff;
            margin: 5px 0 10px;
            &::placeholder {
                color: #999999;
            }
        }

        button.signIn {
            height: 45px;
            background: rgba(255, 255, 255, 0.92);
            letter-spacing: 0.1em;
            color: #000;
            border: 0;
            border-radius: 25px;
            font-size: 16px;
            margin-top: 20px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.03, 'rgba(255, 255, 255, 0.92)')};
            }
        }

        a.signUpGoBack {
            padding-top: 15px;
            height: 45px;
            background: rgba(4, 251, 162, 0.4);
            letter-spacing: 0.1em;
            color: #000;
            border: 0;
            border-radius: 25px;
            font-size: 16px;
            margin-top: 15px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.03, 'rgba(4, 251, 162, 0.4)')};
            }
        }
        p {
            display: flex;
            font-size: 14px;
            letter-spacing: 0.1em;
            font-weight: normal;
            margin-top: 13px;
            color: #fff;
        }
    }
`;

export const Photo = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-bottom: 2px;
    padding-right: 5px;
    text-align: right;
    span {
        color: #fff;
    }
`;
