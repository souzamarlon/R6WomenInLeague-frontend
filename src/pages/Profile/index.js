import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Container, Content, AvailableRow, ButtonPosition } from './styles';
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
    const profile = useSelector((state) => state.user.profile);

    const [selectField, setSelectField] = useState({
        competition: profile.competition,
        ranked: profile.ranked,
        region: profile.region,
        play_style: profile.play_style,
        times: profile.times,
    });

    const dispatch = useDispatch();

    const schema = Yup.object().shape({
        name: Yup.string(),
        email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),
        uplay: Yup.string(),
        competition: Yup.boolean(),
        ranked: Yup.boolean(),
        region: Yup.string(),
        play_style: Yup.string(),
        times: Yup.string(),
        password: Yup.string(),
        oldPassword: Yup.string(),
        confirmPassword: Yup.string(),
    });

    async function handleSubmit({
        name,
        email,
        uplay,
        oldPassword,
        password,
        confirmPassword,
    }) {
        try {
            await api.get('/stats', {
                params: {
                    username: uplay,
                    platform: 'pc',
                    type: 'generic',
                },
            });

            const { competition } = selectField;
            const { ranked } = selectField;
            const { region } = selectField;
            const { play_style } = selectField.play_style.length
                ? selectField.play_style
                : profile;
            const { times } = selectField;

            // TODO - Check if it does not have another account using the same Email or Uplay Nickname.
            const data = {
                name,
                email,
                uplay,
                competition,
                ranked,
                region,
                play_style,
                times,
                oldPassword,
                password,
                confirmPassword,
            };

            dispatch(updateProfileRequest(data));
        } catch (err) {
            toast.error('Uplay nickname not found!');
        }
    }

    function handleSignOut() {
        dispatch(signOut());
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
                        name="oldPassword"
                        type="password"
                        placeholder="Your current password"
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="New password"
                    />
                    <Input
                        name="confirmPassword"
                        type="password"
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
                                        onChange={(value) =>
                                            setSelectField({
                                                ...selectField,
                                                ranked: value,
                                            })
                                        }
                                        defaultOptions
                                        defaultValue={profile.ranked}
                                        width="100px"
                                        height="20px"
                                    />
                                </td>
                                <td>
                                    <Select
                                        name="competition"
                                        options={booleanOptions}
                                        onChange={(value) =>
                                            setSelectField({
                                                ...selectField,
                                                competition: value,
                                            })
                                        }
                                        // defaultOptions
                                        defaultValue={profile.competition}
                                        width="100px"
                                        height="20px"
                                    />
                                </td>
                                <td>
                                    <Select
                                        name="times"
                                        options={timesOptions}
                                        onChange={(value) =>
                                            setSelectField({
                                                ...selectField,
                                                times: value,
                                            })
                                        }
                                        defaultOptions
                                        defaultValue={profile.times}
                                        width="105px"
                                        height="20px"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </AvailableRow>
                    <p>Your Region:</p>
                    <Select
                        name="region"
                        options={regionOptions}
                        onChange={(value) =>
                            setSelectField({
                                ...selectField,
                                region: value,
                            })
                        }
                        defaultOptions
                        defaultValue={profile.region}
                        height="30px"
                    />
                    <p>Play Style:</p>
                    <Select
                        name="play_style"
                        options={playStyleOptions}
                        onChange={(item) =>
                            setSelectField({
                                ...selectField,
                                play_style: item,
                            })
                        }
                        defaultOptions
                        defaultValue={profile.play_style}
                        height="30px"
                    />
                    <ButtonPosition>
                        <button
                            className="signOut"
                            type="button"
                            onClick={handleSignOut}
                        >
                            Log Out
                        </button>
                        <button className="update" type="submit">
                            UPDATE
                        </button>
                    </ButtonPosition>
                </Form>
            </Content>
        </Container>
    );
}
