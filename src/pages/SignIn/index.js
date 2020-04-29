import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatoria'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }
    return (
        <>
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