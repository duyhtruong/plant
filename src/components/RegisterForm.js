import React from 'react';
import { Field, reduxForm  } from 'redux-form';


import Card from 'react-bootstrap/Card'
import FormControl from 'react-bootstrap/FormControl';


const renderCustomForm = ({input, type, placeholder})=>{
    return(<FormControl 
         type={type}
         value={input.value}
         onChange={input.onChange}
         className='loginField'
         placeholder={placeholder}
     />
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
                    type='text'
                    placeholder='PASSWORD'
                   
                />
                </div>
                <div className='loginFormButtonContainer'>
                    <button className='loginFormButtons plantFormButtons' onClick={props.handleSubmit(props.onSubmit)} variant='primary'>Sign Up</button>

                </div>
            </form>
            </Card.Body>
            </Card> 
        );
    
}

export default reduxForm({
    form: 'registerForm'
})(RegisterForm);