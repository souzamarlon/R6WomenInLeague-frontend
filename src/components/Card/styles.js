import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.button`
    width: 195px;
    height: 347px;
    background: rgba(10, 10, 10, 0.5);
    /* box-sizing: border-box; */
    box-shadow: 5px 5px 8px rgb(10, 10, 10);
    border-radius: 9px;
    margin: 10px 5px;
    border: 0;
    transition: background 0.3s;
    align-items: center;
    &:hover {
        background: ${darken(0.3, '#8C0ABA')};
    }

    img {
        width: 170px;
        height: 175px;
        border-radius: 100%;
    }

    h1 {
        padding-top: 12px;
        color: #fff;
        font-size: 1.4rem;
    }
    h2 {
        padding-top: 10px;
        color: rgba(250, 248, 248, 0.56);
        font-size: 1.2rem;
    }

    div.ranked {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 5px auto;
        padding-top: 2px;
        color: #fff;
        width: 81px;
        height: 16.34px;
        opacity: ${(props) => (props.status_ranked ? 1 : 0.1)};
        background-color: ${(props) =>
            props.status_ranked
                ? 'rgba(78, 253, 34, 0.42)'
                : 'rgba(0, 0, 0, 0.8)'};
        border-radius: 9px;
    }
    div.competition {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 5px auto;
        padding-top: 2px;
        width: 95px;
        height: 16.34px;
        color: #fff;
        opacity: ${(props) => (props.status_competition ? 1 : 0.1)};
        background-color: ${(props) =>
            props.status_competition
                ? 'rgba(78, 253, 34, 0.42)'
                : 'rgba(0, 0, 0, 0.8)'};
        border-radius: 9px;
    }

    div.times {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 5px auto;
        padding-top: 2px;
        width: 81px;
        height: 16.34px;
        color: #fff;
        background-color: rgba(24, 29, 163, 0.42);
        border-radius: 9px;
    }

    div.region {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 5px auto;
        padding-top: 2px;
        width: 81px;
        height: 16.34px;
        color: #fff;
        background-color: rgba(255, 25, 34, 0.33);
        border-radius: 9px;
    }

    button {
        background-color: rgba(78, 253, 34, 0.42);
        font-size: 10px;
        height: 14px;
        border: 0;
    }
    img.americaRank {
        position: absolute;
        margin-left: 120px;

        width: 70px;
        height: 70px;
    }
`;
