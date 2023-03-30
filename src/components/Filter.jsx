import React from "react";

export const Filter = ({valueFilter, onChange}) => (

    <label>Фильтр<input type='text' value={valueFilter} onChange={onChange} />
    </label>
)

export default Filter;  
