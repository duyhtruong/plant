import React from 'react'
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class Login extends React.Component{
    
    onSubmit = (formValues) =>{
        return (
            this.props.loginUser(formValues)
        )
    }
    
    render(){
        return(
            <div>
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { loginUser })(Login);