import React from 'react';

import { connect } from 'react-redux';
import { logoutUser } from '../actions';

import Card from 'react-bootstrap/Card';
import history from '../history';

class Logout extends React.Component{
    
    logout = () =>{
        this.props.logoutUser(this.props.user.undefined.token)
        history.push('/plant')
    }
    

    renderLogout = () => {
        return (
            <Card className='loginCard'>
                <h1 className='cardTitle'>Are you sure you want to logout?</h1>
                <div className='loginFormButtonContainer'>
                    <button className='loginFormButtons' onClick={this.logout}>Logout</button>
                    <button className='loginFormButtons' onClick={()=>this.props.hideLogOutModal()}>Cancel</button>
                </div>
             </Card>    
        )
    }

    render(){
        return(
            <div>
                {this.renderLogout()}
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