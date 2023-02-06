import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { required,maxLengthCreator } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import classes from './Login.module.css';
import {login} from '../../redux/auth-reduser';
import { Navigate } from "react-router-dom";

const maxLength10 =maxLengthCreator(40);

const Login = (props)=>{
    const onSubmit =(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to={'/content'}/>
    }
      
    return (
        <div className={classes.container}>
            <a className={classes.login}>Login</a>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        
    )
}
const LoginForm = ({handleSubmit,error})=>{
    return (
            <form onSubmit={handleSubmit}>
                {createField("email","Email",'email',Input,[required,maxLength10])}
                {createField("password","Password",'password',Input,[required,maxLength10])}
                {createField("checkbox",null,'rememberMe',Input,null,null,'remember me')}
                {error && <div className={classes.formSummoriError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);