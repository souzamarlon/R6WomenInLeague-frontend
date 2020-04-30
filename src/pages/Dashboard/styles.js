import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: auto;
    height: 80%;
    display: flex;

    justify-content: center;
    align-items: center;
    background: rgba(27, 25, 28, 0.74);
    border-radius: 8px;
`;
export const Content = styled.div`
    width: 21vw;
    height: 54vh;
    background: rgba(172, 28, 80, 0.5);

    border-radius: 8px;

    padding-top: 20px;

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
