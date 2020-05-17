import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ReactSelect({
    options,
    onChange,
    defaultValue,
    width,
    height,
}) {
    const [selectRegion, setSelectRegion] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        onChange(selectRegion);
    }, [selectRegion]); // eslint-disable-line

    const dot = () => ({
        alignItems: 'center',
        display: 'flex',
        height,
        fontSize: '12px',
        color: 'white',
    });

    const Styles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#ffff',
            height,
            paddingBottom: '20px',
            fontSize: '12px',
            width,
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
                options={options}
                defaultValue={options.find((item) => {
                    return item.value === defaultValue.toString();
                })}
                onChange={(item) => {
                    setSelectRegion(item.value);
                }}
                ref={ref}
                styles={Styles}
            />
        </Container>
    );
}

ReactSelect.propTypes = {
    options: PropTypes.shape().isRequired,
    onChange: PropTypes.shape().isRequired,
    defaultValue: PropTypes.shape().isRequired,
};
