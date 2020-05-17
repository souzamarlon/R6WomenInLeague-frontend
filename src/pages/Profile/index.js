import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Container, Content, AvailableRow } from './styles';
import api from '~/services/api';
import Select from '~/components/ReactSelect';
import {
    regionOptions,
    playStyleOptions,
    booleanOptions,
    timesOptions,
} from '~/components/ReactSelect/Data/data';

import { signOut } from '~/store/modules/auth/actions';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
    const [defaultValue, setDefaultValue] = useState('South America');
    const [selectRegion, setSelectRegion] = useState([]);
    const profile = useSelector((state) => state.user.profile);
    const loading = useSelector((state) => state.auth.loading);

    const schema = Yup.object().shape({
        name: Yup.string().required('Missing name field'),
        email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),
        uplay: Yup.string(),
        password: Yup.string().required('A senha é obrigatoria'),
    });

    async function handleSubmit({ name, email, uplay, password }) {
        try {
            await api.get('/stats', {
                params: {
                    username: uplay,
                    platform: 'pc',
                    type: 'generic',
                },
            });

            const region = selectRegion.length ? selectRegion : defaultValue;

            // TODO - Check if it does not have another account using the same Email or Uplay Nickname.
            // return dispatch(
            //     signUpRequest(name, email, uplay, region, password)
            // );
        } catch (err) {
            return toast.error('Uplay nickname not found!');
        }

        // const playerInfo =
        //     response.data.players[Object.keys(response.data.players)[0]];
        // console.tron.log(playerInfo);
    }

    return (
        <Container>
            <Content>
                <Form
                    initialData={profile}
                    schema={schema}
                    onSubmit={handleSubmit}
                >
                    <p>NAME:</p>
                    <Input
                        name="name"
                        type="name"
                        placeholder="Eliza Ash Cohen"
                    />
                    <p>E-MAIL:</p>
                    <Input
                        name="email"
                        type="email"
                        placeholder="exemplo@email.com"
                    />
                    <p>UPLAY NICKNAME:</p>
                    <Input name="uplay" placeholder="Ash" />
                    <p>Discord:</p>
                    <Input name="discord_user" placeholder="Ash" />
                    <p>PASSWORD:</p>
                    <Input
                        name="password"
                        type="password"
                        placeholder="**********"
                    />

                    <p>AVAILABLE:</p>
                    <AvailableRow>
                        <thead>
                            <tr>
                                <th>RANKED</th>
                                <th>CHAMPIONSHIP</th>
                                <th>TIME</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Select
                                        name="ranked"
                                        options={booleanOptions}
                                        onChange={setSelectRegion}
                                        defaultOptions
                                        defaultValue={defaultValue}
                                        width="100px"
                                        height="20px"
                                    />
                                </td>
                                <td>
                                    <Select
                                        name="competition"
                                        options={booleanOptions}
                                        onChange={setSelectRegion}
                                        defaultOptions
                                        defaultValue={defaultValue}
                                        width="100px"
                                        height="20px"
                                    />
                                </td>
                                <td>
                                    <Select
                                        name="times"
                                        options={timesOptions}
                                        onChange={setSelectRegion}
                                        defaultOptions
                                        defaultValue={defaultValue}
                                        width="105px"
                                        height="20px"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </AvailableRow>
                    <p>PLAY STYLE:</p>
                    <Select
                        name="play_style"
                        options={playStyleOptions}
                        onChange={setSelectRegion}
                        defaultOptions
                        defaultValue={defaultValue}
                        height="30px"
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

                    <button className="update" type="submit">
                        {loading ? 'Carregando... ' : 'UPDATE'}
                    </button>
                </Form>
            </Content>
        </Container>
    );
}
