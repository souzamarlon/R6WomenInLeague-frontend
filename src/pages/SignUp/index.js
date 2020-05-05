import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from 'react-select';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '~/services/api';

import { signUpRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';

export default function SignUp() {
    const [selectRegion, setSelectRegion] = useState([
        {
            region: 'South America',
        },
    ]);
    const schema = Yup.object().shape({
        name: Yup.string().required('Missing name field'),
        email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),
        uplay: Yup.string(),
        password: Yup.string().required('A senha é obrigatoria'),
    });
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    const options = [
        { id: 1, value: 'Africa', label: 'Africa' },
        { id: 2, value: 'Antarctica', label: 'Antarctica' },
        { id: 3, value: 'Asia', label: 'Asia' },
        { id: 4, value: 'Europe', label: 'Europe' },
        { id: 5, value: 'North America', label: 'North America' },
        { id: 6, value: 'Oceania', label: 'Oceania' },
        { id: 7, value: 'South America', label: 'South America' },
    ];

    const dot = () => ({
        alignItems: 'center',
        display: 'flex',
        height: '39px',
        fontSize: '12px',
        color: 'white',
    });

    const Styles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#ffff',
            height: '44px',
            paddingBottom: '20px',
            fontSize: '12px',
        }),

        option: (styles) => {
            return {
                ...styles,
                fontSize: '12px',
            };
        },

        input: (styles) => ({ ...styles, ...dot() }),
        placeholder: (styles) => ({ ...styles, ...dot() }),
        singleValue: (styles) => ({ ...styles, ...dot() }),
    };

    async function handleSubmit({ name, email, uplay, password }) {
        try {
            await api.get('/stats', {
                params: {
                    username: uplay,
                    platform: 'pc',
                    type: 'generic',
                },
            });

            // TODO - Check if it does not have another account using the same Email or Uplay Nickname.

            return dispatch(signUpRequest(name, email, uplay, password));
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
                <p>YOUR REGION:</p>
                <Select
                    name="region"
                    // cacheOptions
                    defaultOptions
                    placeholder="South America..."
                    options={options}
                    styles={Styles}
                    value={options.find((item) => {
                        return item.value === selectRegion.region;
                    })}
                    onChange={(item) => {
                        setSelectRegion({ region: item.value });
                    }}
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
