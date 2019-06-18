import React from 'react';
import { Field, reduxForm  } from 'redux-form';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card'
import FormControl from 'react-bootstrap/FormControl';


const renderCustomForm = ({input, type, placeholder})=>{
    return(

    <FormControl 
         type={type}
         value={input.value}
         onChange={input.onChange}
         placeholder={placeholder}
         className='loginField'
     />
   
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
                        placeholder='email'
      
                    />
                </div>
    
                <div>
                
                <Field  
                    name='password'
                    component={renderCustomForm}
                    type='text'
                    placeholder='password'
                
                   
                />
                </div>
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
    form: 'loginForm'
})(LoginForm);