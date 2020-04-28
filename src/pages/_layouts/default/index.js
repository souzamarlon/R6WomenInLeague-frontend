import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Background from '~/assets/background.jpg';

import { Wrapper, Title } from './styles';

export default function DefaultLayout({ children }) {
    return (
        <Wrapper background={Background}>
            <Title>R6 WOMEN IN LEAGUE</Title>
            <Header />
            {children}
        </Wrapper>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
