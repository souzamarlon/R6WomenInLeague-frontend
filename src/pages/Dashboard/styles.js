import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: auto;
    height: 80%;
    display: flex;
    justify-content: ${(props) => (props.isAlign ? 'flex-start' : 'center')};
    /* align-items: center; */
    background: rgba(27, 25, 28, 0.74);
    border-radius: 8px;
`;

export const Content = styled.div`
    width: 187px;
    height: 347px;
    background: rgba(10, 10, 10, 0.69);
    border-radius: 9px;
    margin: 20px;

    img {
        width: 187px;
        height: 186px;
    }
`;
