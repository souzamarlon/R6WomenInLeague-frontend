import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <>
                    <nav>
                        <NavLink
                            to="/dashboard"
                            activeClassName="selected"
                            // className={open.dashboard ? 'active' : null}
                        >
                            SEARCH
                        </NavLink>
                        <NavLink to="/friends" activeClassName="selected">
                            FRIENDS
                        </NavLink>
                        <NavLink to="/profile" activeClassName="selected">
                            PROFILE
                        </NavLink>
                    </nav>
                </>
            </Content>
        </Container>
    );
}
