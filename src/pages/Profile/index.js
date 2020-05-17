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
    const [selectRegion, setSelectRegion] = useState([]);

    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    const { competition, ranked, region, play_style, times } = profile;

    const schema = Yup.object().shape({
        name: Yup.string().required('Missing name field'),
        email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),
        uplay: Yup.string(),
        password: Yup.string().required('A senha é obrigatoria'),
    });

    async function handleSubmit({
        name,
        email,
        uplay,
        password,
        competition,
        ranked,
        region,
        play_style,
        times,
    }) {
        try {
            await api.get('/stats', {
                params: {
                    username: uplay,
                    platform: 'pc',
                    type: 'generic',
                },
            });

            // TODO - Check if it does not have another account using the same Email or Uplay Nickname.
            dispatch(
                updateProfileRequest(name, email, uplay, region, password)
            );
        } catch (err) {
            return toast.error('Uplay nickname not found!');
        }
    }

    return (
        <Container>
            <Content>
                <Form
                    initialData={profile}
                    schema={schema}
                    onSubmit={handleSubmit}
                >
                    <p>Name:</p>
                    <Input
                        name="name"
                        type="name"
                        placeholder="Eliza Ash Cohen"
                    />
                    <p>E-mail:</p>
                    <Input
                        name="email"
                        type="email"
                        placeholder="exemplo@email.com"
                    />
                    <p>Uplay Nickname:</p>
                    <Input name="uplay" placeholder="Ash" />
                    <p>Discord:</p>
                    <Input name="discord_user" placeholder="Ash" />
                    <p>Password:</p>
                    <Input
                        type="password"
                        name="oldPassword"
                        placeholder="Your current password"
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="New password"
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
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
                                        defaultValue={ranked}
                                        width="100px"
                                        height="20px"
                                    />
                                </td>
                                <td>
                                    <Select
                                        name="competition"
                                        options={booleanOptions}
                                        onChange={setSelectRegion}
                                        // defaultOptions
                                        defaultValue={competition}
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
                                        defaultValue={times}
                                        width="105px"
                                        height="20px"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </AvailableRow>
                    <p>Play Style:</p>
                    <Select
                        name="play_style"
                        options={playStyleOptions}
                        onChange={setSelectRegion}
                        defaultOptions
                        defaultValue={play_style}
                        height="30px"
                    />

                    <p>Your Region:</p>
                    <Select
                        name="region"
                        options={regionOptions}
                        onChange={setSelectRegion}
                        defaultOptions
                        defaultValue={region}
                        height="30px"
                    />

                    <button className="update" type="submit">
                        UPDATE
                    </button>
                </Form>
            </Content>
        </Container>
    );
}
