import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '~/services/api';
import Select from '~/components/ReactSelect';
import { regionOptions } from '~/components/ReactSelect/Data/data';
import { signUpRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';

export default function SignUp() {
    const [defaultValue] = useState('South America');
    const [selectRegion, setSelectRegion] = useState([]);

    const schema = Yup.object().shape({
        name: Yup.string().required('Name field is required.'),
        email: Yup.string().email().required('E-mail field is required.'),
        uplay: Yup.string().required('Uplay field is required.'),
        password: Yup.string().required('Password field is required.'),
    });
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    async function handleSubmit({ name, email, uplay, password }) {
        try {
            await api.get('/stats', {
                params: {
                    username: uplay,
                    platform: 'pc',
                    type: 'seasonal',
                },
            });

            const region = selectRegion.length ? selectRegion : defaultValue;

            // TODO - Check if it does not have another account using the same Email or Uplay Nickname.
            return dispatch(
                signUpRequest(name, email, uplay, region, password)
            );
        } catch (err) {
            return toast.error('Uplay nickname not found!');
        }

        // const playerInfo =
        //     response.data.players[Object.keys(response.data.players)[0]];
        // console.tron.log(playerInfo);
    }

    return (
        <>
            <Form schema={schema} onSubmit={handleSubmit}>
                <p>NAME:</p>
                <Input
                    type="text"
                    name="name"
                    placeholder="Eliza Ash Cohen"
                    maxLength="25"
                />
                <p>E-MAIL:</p>
                <Input
                    name="email"
                    type="email"
                    placeholder="exemplo@email.com"
                />
                <p>UPLAY NICKNAME:</p>
                <Input
                    type="text"
                    name="uplay"
                    placeholder="Ash"
                    maxLength="15"
                />
                <p>PASSWORD:</p>
                <Input
                    name="password"
                    type="password"
                    placeholder="**********"
                />
                <p>YOUR REGION:</p>
                <Select
                    name="region"
                    options={regionOptions}
                    onChange={setSelectRegion}
                    defaultOptions
                    defaultValue={defaultValue}
                    height="30px"
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
