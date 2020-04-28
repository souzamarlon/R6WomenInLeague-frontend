import React from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('Missing name field'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    uplay: Yup.string(),
    password: Yup.string().required('A senha é obrigatoria'),
});

export default function SignUp() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    async function handleSubmit({ name, email, uplay, password }) {
        const response = await axios.get(
            `https://r6.apitab.com/search/uplay/${uplay}`
        );
        // return axios.get(`https://r6.apitab.com/player/${item}`);

        if (!response.data.foundmatch) {
            return toast.error('Authentication failure!');
        }

        const playerInfo =
            response.data.players[Object.keys(response.data.players)[0]];
        console.tron.log(response);
        //   dispatch(signUpRequest(name, email, uplay, password));
    }
    return (
        <>
            <Form schema={schema} onSubmit={handleSubmit}>
                <p>NAME:</p>
                <Input name="name" type="name" placeholder="Eliza Ash Cohen" />
                <p>E-MAIL:</p>
                <Input
                    name="email"
                    type="email"
                    placeholder="exemplo@email.com"
                />
                <p>UPLAY NICKNAME:</p>
                <Input name="uplay" placeholder="Ash" />
                <p>PASSWORD:</p>
                <Input
                    name="password"
                    type="password"
                    placeholder="**********"
                />

                <button className="signIn" type="submit">
                    {loading ? 'Carregando... ' : 'SIGN UP'}
                </button>
                <Link to="/" className="signUpGoBack">
                    ALREADY HAVE A LOGIN
                </Link>
            </Form>
        </>
    );
}
