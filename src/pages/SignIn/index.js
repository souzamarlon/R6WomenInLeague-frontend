import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';

const schema = Yup.object().shape({
    email: Yup.string().email().required('E-mail field is required.'),
    password: Yup.string().required('Password field is required.'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <h1 className="welcome">Welcome,</h1>
            <h4 className="welcomeText">
                In order to fight against discrimination, our goal is to help
                women in R6 to find a safe space during the game experience and
                connect with other women around the globe.
            </h4>
            <Form schema={schema} onSubmit={handleSubmit}>
                <p>E-MAIL:</p>
                <Input
                    name="email"
                    type="email"
                    placeholder="exemplo@email.com"
                />
                <p>PASSWORD:</p>
                <Input
                    name="password"
                    type="password"
                    placeholder="**********"
                />

                <button className="signIn" type="submit">
                    {loading ? 'Carregando... ' : 'LOGIN'}
                </button>
                <Link to="/signup" className="signUpGoBack">
                    SIGN UP
                </Link>
            </Form>
        </>
    );
}
