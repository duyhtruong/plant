import React from 'react';
import { Field, reduxForm  } from 'redux-form';


import Card from 'react-bootstrap/Card'
import FormControl from 'react-bootstrap/FormControl';

const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = <p className='loginFieldError'>Required</p>
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = <p className='loginFieldError'>Invalid email address</p>
    }
    if (!values.password) {
      errors.password = <p className='loginFieldError'>Required</p>
    } 
    return errors
  }

const renderCustomForm = ({input, type, placeholder, meta: {touched, error}})=>{
    return(
        <div>
            <input {...input} placeholder={placeholder} type={type} className='loginField'/>
            {touched && (error && <span>{error}</span>)}
        </div>


//         <div>
//    <FormControl 
//          type={type}
//          value={input.value}
//          onChange={input.onChange}
//          placeholder={placeholder}
//          className='loginField'
//      />{touched && (error && <span>{error}</span>)}
//      </div>
   
    )
 }


const LoginForm = (props) => {


        return(
            
            <Card className='loginCard'>
            <Card.Title className='cardTitle'>Login</Card.Title>
            <Card.Body>
            <form >
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


                {props.renderError()}
                <div className='loginFormButtonContainer'>
                    <button className='loginFormButtons' type='submit' onClick={props.handleSubmit(props.onSubmit)}>
                        Login
                    </button>
                </div>
     
            </form>
            </Card.Body>

            </Card> 
        );
    
}

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);