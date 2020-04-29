import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Background from '~/assets/background.jpg';

import { Wrapper, Title, Photo } from './styles';

export default function DefaultLayout({ children }) {
    return (
        <Wrapper background={Background}>
            <Title>R6 WOMEN IN LEAGUE</Title>
            <Header />
            {children}
            <Photo>
                <span>Photo by Omar Prestwich on Unsplash</span>
            </Photo>
        </Wrapper>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
