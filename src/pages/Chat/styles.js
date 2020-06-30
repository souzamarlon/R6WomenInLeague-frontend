import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    width: 300px;
    height: 400px;
    background: #fff;

    form {
        display: flex;
        flex-direction: column;
        /* margin-top: 20px; */
        margin: 0 20px;

        input {
            background: rgba(255, 255, 255, 0.2);
            border: 0.5px solid #eee;
            /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
            border-radius: 4px;
            height: 40px;
            padding: 0 15px;
            color: #000;
            margin: 0 0 10px;
            &::placeholder {
                color: #999999;
            }
        }
    }
`;

export const Content = styled.div`
    height: 300px;
    background: rgba(0, 25, 255, 0.9);

    overflow: auto;
    .text {
        color: #000;
        font-size: 14px;
    }
`;
