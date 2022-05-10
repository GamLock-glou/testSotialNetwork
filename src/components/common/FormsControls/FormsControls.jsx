import React from 'react';
import { Field } from 'redux-form';
import s from './FormsControls.module.css'

const FormControl = ({ children, input, meta, ...props }) => {
    const { error, touched } = meta;
    const hasError = touched && error;
    return <div className={s.formControl + " " + (hasError && s.error)}>
        <div>
            {children}
        </div>
        <div>
            {hasError && <span>{error}</span>}
        </div>
    </div>
}

export const TextArea = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}

export const CreateField = (placeholder,
    name,
    component,
    validatet,
    type,
    text = null
) => (<div>
    <Field placeholder={placeholder}
        name={name}
        component={component}
        validate={validatet}
        type={type}
    />{text}
</div>)