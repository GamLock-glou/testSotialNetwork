import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Input, CreateField } from '../common/FormsControls/FormsControls';
import {requiredField} from "../../utils/Validators/validators"
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
            {CreateField('Email', 'email', Input, [requiredField], 'text')}
            {CreateField('Password', 'password', Input, [requiredField], 'password')}
            {CreateField( null, 'remembreMe', Input, null, 'checkbox', 'remember me')}
        { error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = ({email, password, remembreMe}) => {
        props.login(email, password, remembreMe);
    }
    if(props.isAuth)
        return <Redirect to='/profile'/>
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>;
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);