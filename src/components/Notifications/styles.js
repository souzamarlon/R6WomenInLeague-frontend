import styled from 'styled-components';

export const Container = styled.div`
    /* justify-content: center; */
    display: flex;
    margin: 2px, auto;
    h2 {
        border-radius: 50px;
        font-size: 8px;
        color: #fff;
    }
    &:hover {
        transform: scale(1.1);
    }
`;
