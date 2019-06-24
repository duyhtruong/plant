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
    
    renderError = () =>{
        if(this.props.error.error){
            return <p className='loginFieldError'>{this.props.error.error}</p>
        }
    }

    render(){
        return(
            <div className='loginLandingPage'>
                <LoginForm onSubmit={this.onSubmit} renderError={this.renderError}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, { loginUser })(Login);