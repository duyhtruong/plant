import React from 'react';
import { Field, reduxForm  } from 'redux-form';


import Card from 'react-bootstrap/Card'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const renderCustomForm = ({input, type})=>{
    return(<FormControl 
         type={type}
         value={input.value}
         onChange={input.onChange}
     />
    )
 }

const RegisterForm = (props) => {


        return(
            <Card>
            <Card.Body>
            <form >
  
            <div>
                    <label>name:</label>
                    <Field
                        name='name'
                        component={renderCustomForm}
                        type='text'
                     
                        
                    />
                </div>  

                <div>
                    <label>email:</label>
                    <Field
                        name='email'
                        component={renderCustomForm}
                        type='text'
                     
                        
                    />
                </div>
    
                <div>
                <label>password:</label>
                <Field  
                    name='password'
                    component={renderCustomForm}
                    type='text'
                
                   
                />
                </div>
                <div className='plantFormButtons'>
                    <Button variant='primary'>Submit</Button>

                </div>
            </form>
            </Card.Body>
            </Card> 
        );
    
}

export default reduxForm({
    form: 'registerForm'
})(RegisterForm);