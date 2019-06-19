import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class Logout extends React.Component{
    
    logout = () =>{
        return(
            this.props.logoutUser(this.props.user.undefined.token)
        )
    }
    
    render(){
        return(
            <div className='loginLandingPage'>
            <Card className='loginCard'>
                <h1 className='cardTitle'>Are you sure you want to logout</h1>
                <div className='loginFormButtonContainer'>
                    <button className='loginFormButtons' onClick={this.logout}>LOGOUT</button>
                    <Link className='loginFormButtons plantFormLink' to='/dashboard'>Cancel</Link>
                </div>
            </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user: state.users
    }
}

export default connect(mapStateToProps, { logoutUser })(Logout)