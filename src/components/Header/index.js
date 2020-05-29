import React from 'react';

import { NavLink } from 'react-router-dom';

import history from '~/services/history';
import { Container, Content, AlignNotification } from './styles';

import Notifications from '../Notifications';

export default function Header() {
    const location = history.location.pathname;
    function refreshPage() {
        history.go('/search');
    }
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
                            DASHBOARD
                        </NavLink>
                        <NavLink
                            to="/search"
                            activeClassName="selected"
                            onClick={() =>
                                location.match('search') ? refreshPage() : null
                            }
                        >
                            SEARCH
                        </NavLink>

                        <NavLink to="/friends" activeClassName="selected">
                            <AlignNotification>
                                FRIENDS
                                <Notifications />
                            </AlignNotification>
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
