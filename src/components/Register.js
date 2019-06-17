import React from 'react';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { newUser } from '../actions';

class Register extends React.Component{
    
    onSubmit = (formValues) =>{
        return(
            this.props.newUser(formValues)
        )
    }
    
    render(){
        return(
            <div>
                <RegisterForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { newUser })(Register);