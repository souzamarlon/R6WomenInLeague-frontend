import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Content, Container, Box } from './styles';

import SignInPic from '~/assets/backgroundWoman.jpg';

export default function AuthLayout({ children }) {
    return (
        <Wrapper background={SignInPic}>
            <Box>
                <Title>R6 WOMEN IN LEAGUE</Title>
                <Container>
                    <Content>{children}</Content>
                </Container>
            </Box>
        </Wrapper>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
