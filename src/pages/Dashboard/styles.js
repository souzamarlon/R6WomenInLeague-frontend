import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: auto;
    height: 84%;
    display: flex;
    justify-content: ${(props) => (props.isAlign ? 'flex-start' : 'center')};
    /* align-items: center; */
    background: rgba(27, 25, 28, 0.74);
    border-radius: 8px;
`;

export const CardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;
    list-style: none;
    /* overflow: auto; */
`;
