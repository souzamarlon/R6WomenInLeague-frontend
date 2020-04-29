import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${(props) => props.background});
    background-size: cover;
    text-align: center;
    padding-top: 44px;
`;

export const Title = styled.text`
    color: #fff;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.4em;
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
