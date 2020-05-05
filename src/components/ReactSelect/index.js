import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';

import { Container } from './styles';

export default function ReactSelect({
    name,
    label,
    options,
    onChange,
    defaultValue,
    ...rest
}) {
    const [selectRegion, setSelectRegion] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        onChange(selectRegion);
    }, [selectRegion]); // eslint-disable-line

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

    return (
        <Container>
            <Select
                placeholder="South America..."
                options={options}
                defaultValue={options.find((item) => {
                    return item.value === defaultValue.toString();
                })}
                onChange={(item) => {
                    setSelectRegion(item.value);
                }}
                ref={ref}
                styles={Styles}
                getOptionValue={(option) => option.id}
                getOptionLabel={(option) => option.label}
                {...rest}
            />
        </Container>
    );
}
