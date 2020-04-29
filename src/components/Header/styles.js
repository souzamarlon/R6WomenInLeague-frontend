import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    display: flex;
    /* width: 100vw; */
    margin: 20px auto;

    width: 604px;
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
    nav {
        display: flex;
        align-items: center;
        padding-right: 20px;

        color: #000000;
        img {
            display: block;
            width: 135px;
            height: 26px;
            margin-right: 20px;
            padding-right: 20px;
            align-items: center;
            border-right: 1px solid #dddddd;
        }
        a {
            font-size: 1.5rem;
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

        /* .active {
            color: #000000;
        } */
    }
`;
