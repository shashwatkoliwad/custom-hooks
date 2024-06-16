// src/components/FormComponent.js
import React from 'react';
import useForm from '../Hooks/useForm';

const FormComponent = () => {
    const [formValues, handleChange] = useForm({ username: '', email: '' });

    return (
        <div>
            <form>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </form>
            <p>Username: {formValues.username}</p>
            <p>Email: {formValues.email}</p>
        </div>
    );
};

export default FormComponent;
