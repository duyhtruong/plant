import React from 'react';

import { Field, reduxForm  } from 'redux-form';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//Validate EditForm fields
const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = <p className='loginFieldError'>Email is Required</p>
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = <p className='loginFieldError'>Invalid email address</p>
    }
    if (!values.name) {
        errors.name = <p className='loginFieldError'>Name is Required</p>
      } 
    return errors
  }

//Render Custom Redux-Form
const renderCustomForm = ({input, type, placeholder, meta:{touched, error}})=>{
    return(
        <div>
        <input {...input} placeholder={placeholder} type={type} className='loginField'/>
        {touched && (error && <span>{error}</span>)}
        </div>
    )
 }

const EditUserForm = (props) => {
    return(
        <Card className='loginCard'>
        <Card.Title className='cardTitle'>Edit Account</Card.Title>
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

        <div className='userEditFormButtonContainer'>
            <div>
                <button 
                    className='editUserFormPrimary' 
                    onClick={props.handleSubmit(props.onSubmit)}>
                    Submit
                </button>
                <Button 
                    className='editUserFormSecondary' 
                    onClick={()=>props.hideModal()}>
                    Cancel
                </Button>
            </div>
                <Button 
                    className='deleteUserButton' 
                    onClick={()=>props.deleteUser()}>
                    Delete Account
                </Button>  
        </div>
    
        </form>
        </Card.Body>
        </Card> 
    );   
}

export default reduxForm({
    form: 'editUserForm',
    validate
})(EditUserForm);