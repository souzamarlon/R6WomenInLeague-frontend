import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    width: 21vw;
    height: 54vh;
    background: rgba(172, 28, 80, 0.5);

    border-radius: 8px;

    padding-top: 10px;
    margin-top: 40px;

    h1 {
        margin-top: 40px;
        padding: 0 20px;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        letter-spacing: 0.2em;
        color: #fff;
    }

    h2 {
        padding-top: 20px;
        font-size: 11px;
        line-height: 15px;
        letter-spacing: 0.3em;
        color: #ffffff;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Options = styled.div`
    padding-top: 5px;
    width: 200px;
    font-size: 12px;
    border-radius: 8px;
`;

export const SubmitButton = styled.button`
    font-size: 14px;
    font-weight: bold;
    margin-top: 30px;
    width: 200px;
    height: 41px;
    color: #fff;
    background: rgba(5, 250, 88, 0.4);
    /* box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4); */

    transition: background 0.2s;
    &:hover {
        background: ${darken(0.02, 'rgba(5, 250, 88, 0.3)')};
    }
    border: 0;
    border-radius: 25px;
`;
