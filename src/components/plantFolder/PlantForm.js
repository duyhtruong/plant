import React from 'react';
import { Field, reduxForm  } from 'redux-form';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const renderCustomForm = ({input, type, placeholder})=>{
    return(<FormControl 
         type={type}
         placeholder={placeholder}
         value={input.value}
         onChange={input.onChange}
     />
    )
 }

const PlantForm = (props) => {

    const onSubmit = (formValues) =>{props.onSubmit(formValues)}

        return(
            <Card className='plantFormCard'>
            <Card.Body>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <div>
                    <label>Name of Plant:</label>
                    <Field
                        name='name'
                        component={renderCustomForm}
                        type='text'
                        placeholder='name'
                        
                    />
                </div>
    
                <div>
                <label>How often Water:</label>
                <Field  
                    name='water'
                    component={renderCustomForm}
                    type='text'
                    placeholder='one week'
                   
                />
                </div>
                <div className='plantFormButtons'>
                    <Button onClick={props.handleSubmit(props.onSubmit)} variant='primary'>Submit</Button>
                    <Button variant='danger'>
                        <Link to='/dashboard' className='plantFormLink'>Cancel</Link>
                    </Button>
                </div>
            </form>
            </Card.Body>
            </Card> 
        );
    
}

export default reduxForm({
    form: 'plantForm'
})(PlantForm);