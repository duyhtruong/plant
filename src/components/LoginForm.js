import React from 'react';
import { Field, reduxForm  } from 'redux-form';


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