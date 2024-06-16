import React, { useState } from 'react';

const useForm = (initialParams) => {
    const [values, setValue] = useState(initialParams)

    const updateState = (event) => {
        const { name, value } = event.target;
        setValue({
            ...values,
            [name]: value
        });
    }
    return [values, updateState];
};

export default useForm;