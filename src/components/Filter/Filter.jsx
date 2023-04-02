import React from "react";
import PropTypes from 'prop-types';

export const Filter = ({valueFilter, onChange}) => (

    <label>Фильтр
        <input type='text' value={valueFilter} onChange={onChange} />
    </label>
)

export default Filter;  

Filter.propTypes = {
    valueFilter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}