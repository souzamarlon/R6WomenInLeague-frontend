import React, { useState } from 'react';
import Select from 'react-select';
import { Form } from '@rocketseat/unform';

import { Container, Options, Box, SubmitButton } from './styles';

export default function SearchTool({ onChange }) {
    const [selectOptions, setSelectOptions] = useState({
        play_style: { id: 3, value: 'Versatile' },
        competition: { id: 2, value: 'false' },
        ranked: { id: 2, value: 'false' },
        times: { id: 4, value: 'All Day' },
    });

    const playStyle_options = [
        { id: 1, value: 'Support', label: 'Support' },
        { id: 2, value: 'Entry fragger', label: 'Entry fragger' },
        { id: 3, value: 'Versatile', label: 'Versatile' },
    ];
    const boolean_options = [
        { id: 1, value: 'true', label: 'Yes' },
        { id: 2, value: 'false', label: 'No' },
    ];
    const times_options = [
        { id: 1, value: 'Morning', label: 'Morning' },
        { id: 2, value: 'Afternoon', label: 'Afternoon' },
        { id: 3, value: 'Night', label: 'Night' },
        { id: 4, value: 'All Day', label: 'All Day' },
    ];

    async function handleSubmit() {
        const data = {
            play_style: selectOptions.play_style.value,
            ranked: selectOptions.ranked.value,
            competition: selectOptions.competition.value,
            times: selectOptions.times.value,
        };

        onChange(data);
    }

    return (
        <Container>
            <h1>Which type of player are you looking for?</h1>

            <Form onSubmit={handleSubmit}>
                <Box>
                    <h2>PLAY STYLE</h2>
                    <Options>
                        <Select
                            name="play_style"
                            // cacheOptions
                            value={playStyle_options.find((item) => {
                                return item.id === selectOptions.play_style.id;
                            })}
                            options={playStyle_options}
                            onChange={(item) => {
                                setSelectOptions({
                                    ...selectOptions,
                                    play_style: {
                                        id: item.id,
                                        value: item.value,
                                    },
                                });
                            }}
                            isMulti={false}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'hotpink',
                                    primary: 'hotpink',
                                },
                            })}
                        />
                    </Options>
                    <h2>Player available to play championship?</h2>
                    <Options>
                        <Select
                            name="competition"
                            // cacheOptions
                            value={boolean_options.find((item) => {
                                return item.id === selectOptions.competition.id;
                            })}
                            options={boolean_options}
                            isMulti={false}
                            onChange={(item) => {
                                setSelectOptions({
                                    ...selectOptions,
                                    competition: {
                                        id: item.id,
                                        value: item.value,
                                    },
                                });
                            }}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'hotpink',
                                    primary: 'hotpink',
                                },
                            })}
                        />
                    </Options>
                    <h2>Player available to play ranked?</h2>
                    <Options>
                        <Select
                            name="ranked"
                            // cacheOptions
                            value={boolean_options.find((item) => {
                                return item.id === selectOptions.ranked.id;
                            })}
                            options={boolean_options}
                            onChange={(item) => {
                                setSelectOptions({
                                    ...selectOptions,
                                    ranked: {
                                        id: item.id,
                                        value: item.value,
                                    },
                                });
                            }}
                            isMulti={false}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'hotpink',
                                    primary: 'hotpink',
                                },
                            })}
                        />
                    </Options>
                    <h2>
                        Which part of day does the player need to be available?
                    </h2>
                    <Options>
                        <Select
                            name="times"
                            // cacheOptions
                            value={times_options.find((item) => {
                                return item.id === selectOptions.times.id;
                            })}
                            options={times_options}
                            isMulti={false}
                            onChange={(item) => {
                                setSelectOptions({
                                    ...selectOptions,
                                    times: {
                                        id: item.id,
                                        value: item.value,
                                    },
                                });
                            }}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'hotpink',
                                    primary: 'hotpink',
                                },
                            })}
                        />
                    </Options>
                    <SubmitButton>SEARCH</SubmitButton>
                </Box>
            </Form>
        </Container>
    );
}
