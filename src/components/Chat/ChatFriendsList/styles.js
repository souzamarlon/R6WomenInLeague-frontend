import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height: 60px;
    margin: 2px auto;
    border-radius: 4px;

    background: #333;
    box-shadow: 5px 10px 10px 3px rgba(0, 0, 0, 0.4);
    align-items: center;

    flex-direction: row;
    display: flex;

    h1 {
        font-size: 14px;
        color: #fff;
    }
    img {
        width: 50px;
        height: 55px;
        border-radius: 100%;
        margin: 0 10px;
    }
`;

export const Info = styled.div`
    width: 110px;

    /* background: #fff; */
    justify-content: center;
    /* align-items: center; */

    .online {
        color: #29f907;
    }

    .offline {
        color: #f90707;
    }
`;
