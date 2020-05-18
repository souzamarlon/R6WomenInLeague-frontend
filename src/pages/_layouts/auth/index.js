import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Content, Container, Box, Photo } from './styles';

import SignInPic from '~/assets/games.jpg';

export default function AuthLayout({ children }) {
    return (
        <Wrapper background={SignInPic}>
            <Box>
                <Title>R6 WOMEN'S ALLIANCE</Title>
                <Container>
                    <Content>{children}</Content>
                </Container>
            </Box>
            <Photo>
                <span>Photo by Carl Raw on Unsplash</span>
            </Photo>
        </Wrapper>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
