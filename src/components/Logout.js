import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Logout extends React.Component{
    
    logout = () =>{
        return(
            this.props.logoutUser(this.props.user.undefined.token)
        )
    }
    
    render(){
        return(
            <div>
                <h1>Are you sure you want to logout</h1>
                <button onClick={this.logout}>logout</button>
                <button>no</button>
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