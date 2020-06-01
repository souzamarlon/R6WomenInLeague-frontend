import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Content, Container } from './styles';

import SignInPic from '~/assets/games.jpg';

export default function AuthLayout({ children }) {
    return (
        <Wrapper background={SignInPic}>
            <Title>
                <p>R6 WOMEN'S ALLIANCE</p>
            </Title>
            <Container>
                <Content>{children}</Content>
            </Container>

            <h1 className="photoBy">Photo by Carl Raw on Unsplash</h1>
        </Wrapper>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
