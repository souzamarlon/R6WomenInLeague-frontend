import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    display: flex;
    /* width: 100vw; */
    margin: 20px auto;

    width: 31.45vw;
    height: 43px;
    background: rgba(221, 221, 221, 0.2);
    border: 1px solid rgba(221, 221, 221, 0.2);
    box-sizing: border-box;
    border-radius: 29px;
`;
export const Content = styled.div`
    display: flex;
    height: 64px;

    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    nav {
        display: flex;
        align-items: center;
        /* padding-right: 20px; */

        color: #000000;
        a {
            font-size: 1.6rem;
            margin-right: 15px;
            font-weight: bold;
            color: #999999;
        }
        a:hover {
            color: #000000;
        }
        .selected {
            color: #000000;
        }
    }
`;

export const AlignNotification = styled.div`
    display: flex;
    flex-direction: row;
`;
