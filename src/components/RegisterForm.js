import React from 'react';

import { Field, reduxForm  } from 'redux-form';

import Card from 'react-bootstrap/Card'

//Validate Register Field
const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = <p className='loginFieldError'>Email is Required</p>
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = <p className='loginFieldError'>Invalid email address</p>
    }
    if (!values.password) {
      errors.password = <p className='loginFieldError'>Password is Required</p>
    } 
    if (!values.name) {
        errors.name = <p className='loginFieldError'>Name is Required</p>
      } 
    return errors
  }

const renderCustomForm = ({input, type, placeholder, meta:{touched, error}})=>{
    return(
        <div>
        <input {...input} placeholder={placeholder} type={type} className='loginField'/>
        {touched && (error && <span>{error}</span>)}
        </div>
    )
 }

const RegisterForm = (props) => {
        return(
            <Card className='loginCard'>
            <Card.Title className='cardTitle'>Sign Up</Card.Title>
            <Card.Body>
            <form >
            <div>
                <Field
                    name='name'
                    component={renderCustomForm}
                    type='text'
                    placeholder='NAME' 
                />
            </div>  
            <div>
                <Field
                    name='email'
                    component={renderCustomForm}
                    type='text'
                    placeholder='EMAIL'
                />
            </div>
    
            <div>  
                <Field  
                    name='password'
                    component={renderCustomForm}
                    type='password'
                    placeholder='PASSWORD'   
                />
            </div>
                <div className='loginFormButtonContainer'>
                    <button 
                        className='loginFormButtons plantFormButtons' 
                        onClick={props.handleSubmit(props.onSubmit)} 
                        variant='primary'>
                        Sign Up
                    </button>
                </div>
            </form>
            </Card.Body>
            </Card> 
        );   
}

export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm);