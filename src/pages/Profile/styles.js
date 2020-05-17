import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    background: rgba(27, 25, 28, 0.74);
    width: 400px;
    height: 815px;
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
            height: 40px;
            padding: 0 15px;
            color: #ffff;
            margin: 0 0 10px;
            &::placeholder {
                color: #999999;
            }
        }

        button.update {
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
                background: ${darken(0.03, 'rgba(255, 255, 255, 0.70)')};
            }
        }

        p {
            display: flex;
            font-size: 14px;
            letter-spacing: 0.1em;
            font-weight: normal;
            margin-top: 8px;
            margin-bottom: 5px;
            color: #fff;
        }
    }
`;

export const AvailableRow = styled.table`
    display: flex;
    flex-direction: column;
    /* border-collapse: collapse; */
    border: 0;

    thead th {
        width: 300px;
        color: #fff;
        font-size: 1.4rem;
        font-weight: bold;
        margin-top: 5px;
        text-align: center;
        background: rgba(255, 3, 26, 0.41);
        border-radius: 4px;
    }
    tbody td {
        text-align: center;
        padding-top: 5px;
        /* height: 57px; */
        padding-right: 10px;
        border-radius: 4px;
    }
`;
