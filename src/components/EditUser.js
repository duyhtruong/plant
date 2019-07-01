import React from 'react';

import EditUserForm from './EditUserForm';

import { connect } from 'react-redux';
import { editUser, deleteUser } from '../actions';

import _ from 'lodash';
import history from '../history';


class EditUser extends React.Component{
    
    deleteButton = () =>{
        this.props.deleteUser(this.props.user.undefined.token)
        history.push('/plant')
    }
    
    //onSubmit helper function to pass into editUserForm
    onSubmit=(formValues)=>{
        this.props.editUser(formValues,this.props.user.undefined.token)
        this.props.hideEditUserModal()
    }
    
    render(){
        return(
            <div>
                <EditUserForm 
                    initialValues={_.pick(this.props.user.undefined.user, 'name','email')}
                    onSubmit={this.onSubmit}
                    hideModal={this.props.hideEditUserModal}
                    deleteUser={this.deleteButton}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return{
        user: state.users
    }
}

export default connect(mapStateToProps,{ editUser, deleteUser })(EditUser);