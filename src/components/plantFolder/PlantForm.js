import React from 'react';
import { Field, reduxForm  } from 'redux-form';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import DropdownList from 'react-widgets/lib/DropdownList';

import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer(moment)

const renderDateTimePicker = ({ input: { onChange,value }, showTime}) =>
<DateTimePicker
    onChange={onChange}
    format='DD MM YYYY'
    time={showTime}
    value={!value ? null : new Date(value)}
/>

const renderDropdownList = ({input, data, valueField, textField }) => 
<DropdownList {...input}
    data={data}
    onChange={input.onChange} />

const renderCustomForm = ({input, type, placeholder, meta:{touched, error}})=>{
    return(
        <div>
            <input {...input} placeholder={placeholder} type={type} className='loginField'/>
            {touched && (error && <span>{error}</span>)}
        </div>
    )
 }


 const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = <p className='loginFieldError'>Name Required</p>
    } else if (values.name.length > 15) {
      errors.name = <p className='loginFieldError'>Must be 15 characters or less</p>
    }
    if (!values.water) {
        errors.water = <p className='loginFieldError'>Number of days required</p>
      } else if (isNaN(Number(values.water))) {
        errors.water = <p className='loginFieldError'>Must be a number</p>
      } 
    if (!values.lastwater) {
      errors.lastwater = <p className='loginFieldError'>Date Required</p>
    }
    return errors
  }


const sunType = [
    'Likes low light',
    'Likes filtered light',
    'Likes direct light'
]



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
                <label>Type of Light:</label>
                <Field  
                    name='sun'
                    component={renderDropdownList}
                    data={sunType}
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
    form: 'plantForm',
    validate
})(PlantForm);