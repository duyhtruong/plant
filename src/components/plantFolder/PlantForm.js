import React from 'react';
import { Field, reduxForm  } from 'redux-form';

import Card from 'react-bootstrap/Card'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer(moment)

const renderDateTimePicker = ({ input: { onChange,value }, showTime}) =>
<DateTimePicker
    onChange={onChange}
    format='DD MM YYYY'
    time={showTime}
    value={!value ? null : new Date(value)}
/>



const renderCustomForm = ({input, type, placeholder})=>{
    return(<FormControl 
         type={type}
         placeholder={placeholder}
         value={input.value}
         onChange={input.onChange}
         className='loginField'
     />
    )
 }

const PlantForm = (props) => {

    const onSubmit = (formValues) =>{props.onSubmit(formValues)}

        return(
            <Card className='loginCard'>
            <Card.Title className='cardTitle'>Plant Form</Card.Title>
            <Card.Body>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <div>
                    <label>Name of Plant:</label>
                    <Field
                        name='name'
                        component={renderCustomForm}
                        type='text'
                        placeholder="'Pothos Neon'"
                        
                    />
                </div>
    
                <div>
                <label>How Much Sunlight:</label>
                <Field  
                    name='sun'
                    component={renderCustomForm}
                    type='text'
                    placeholder="'Likes direct sunlight'"
                   
                />
                </div>
                <div>
                <label>How many days between watering:</label>
                <Field  
                    name='water'
                    component={renderCustomForm}
                    type='text'
                    placeholder="'8'"
                   
                />
                </div>
                <div>
                <label>Last time plant was watered:</label>
                    <Field 
                        name='lastwater'
                        showTime={false}
                        component={renderDateTimePicker}
                    />
                </div>

                <div className='plantFormButtons'>
                    <Button onClick={props.handleSubmit(props.onSubmit)} variant='primary'>Submit</Button>
                    <Button variant='danger' onClick={()=>props.hideModal()}>Cancel</Button>
                </div>
            </form>
            </Card.Body>
            </Card> 
        );
    
}

export default reduxForm({
    form: 'plantForm'
})(PlantForm);