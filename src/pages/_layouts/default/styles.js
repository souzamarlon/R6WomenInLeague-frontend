import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 103vh;

    background: url(${(props) => props.background});
    background-size: 100% 100%;

    text-align: center;
    padding-top: 44px;
    position: relative;

    h1.photoBy {
        width: 99%;
        position: absolute;
        bottom: 0;
        font-size: 8px;
        text-align: right;
        color: #fff;
    }
`;

export const Title = styled.div`
    color: #fff;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.4em;
`;
