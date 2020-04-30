import React, { useState } from 'react';
import Select from 'react-select';

import { Form, Input } from '@rocketseat/unform';
import { Container, Options, Box, SubmitButton } from './styles';

export default function Search() {
    const [op, setOp] = useState([]);
    const playStyle_options = [
        { id: 1, value: 'Support', label: 'Support' },
        { id: 2, value: 'Entry fragger', label: 'Entry fragger' },
        { id: 3, value: 'Versatile', label: 'Versatile' },
    ];
    const boolean_options = [
        { id: 1, value: 'Yes', label: 'Yes' },
        { id: 2, value: 'No', label: 'No' },
    ];
    const times_options = [
        { id: 1, value: 'Morning', label: 'Morning' },
        { id: 2, value: 'Afternoon', label: 'Afternoon' },
        { id: 3, value: 'Night', label: 'Night' },
        { id: 4, value: 'All Day', label: 'All Day' },
    ];

    async function handleSubmit({ name }) {}

    return (
        <Container>
            <h1>Which type of player are you looking for?</h1>
            {/* <Form schema={schema} onSubmit={handleSubmit}> */}

            <Form onSubmit={handleSubmit}>
                <Box>
                    <h2>PLAY STYLE</h2>
                    <Options>
                        <Select
                            name="play_style"
                            // cacheOptions
                            defaultOptions
                            options={playStyle_options}
                            onChange={setOp}
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
                            defaultOptions
                            options={boolean_options}
                            onChange={setOp}
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
                    <h2>Player available to play ranked?</h2>
                    <Options>
                        <Select
                            name="ranked"
                            // cacheOptions
                            defaultOptions
                            options={boolean_options}
                            onChange={setOp}
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
                            defaultOptions
                            options={times_options}
                            onChange={setOp}
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
                    <SubmitButton>SEARCH</SubmitButton>
                </Box>
            </Form>
        </Container>
    );
}
