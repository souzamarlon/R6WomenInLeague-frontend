import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    display: flex;
    /* width: 100vw; */
    margin: auto;

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
    align-items: center;
    nav {
        display: flex;
        align-items: center;
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
        .active {
            color: #000000;
        }
    }
`;
export const Profile = styled.div`
    display: flex;
    align-items: center;
    div {
        text-align: right;
        margin-right: 10px;
        strong {
            display: block;
            color: #666666;
            font-size: 1.4rem;
            line-height: 1.6rem;
        }
        button {
            display: 1;
            font-size: 1.2rem;
            background: #ffff;
            color: #de3b3b;
            border: 0;
            margin-left: 8px;
        }
    }
`;
