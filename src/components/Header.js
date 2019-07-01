import React from 'react'
import Logout from './Logout';

import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import EditUser from './EditUser'

class Header extends React.Component{  
    state ={
        logOutModal : false,
        editUserModal : false
    }
    
    //Toggle Logout Modal
    showLogOutModal = () =>{
        this.setState({
            logOutModal : true
        })
    }

    hideLogOutModal = () =>{
        this.setState({
            logOutModal : false
        })
    }

    //Toggle EditForm Modal
    showEditUserModal = () =>{
        this.setState({
            editUserModal : true
        })
    }

    hideEditUserModal = () =>{
        this.setState({
            editUserModal : false
        })
    }    

    //Nav buttons
    renderButton = () =>{
        return(
            <div>
                <button 
                    className='navBarLogout' 
                    onClick={this.showLogOutModal}>
                    Logout
                </button>
                <button 
                    className='navBarLogout' 
                    onClick={this.showEditUserModal}>
                    Edit Account
                </button>
            </div>        
        )
    }

    //Render Navbar using React-Bootstrap Navbar
    render(){
        return(
            <div>
                <Navbar variant='dark' expand='defaultExpanded' className='navBar'>
                    <Navbar.Toggle />                   
                    <Navbar.Collapse className='justify-content-end'>
                        {this.renderButton()}          
                    </Navbar.Collapse>
                </Navbar>

                <Modal show={this.state.logOutModal}>
                    <Logout hideLogOutModal={this.hideLogOutModal} />
                </Modal>
                <Modal show={this.state.editUserModal}>
                    <EditUser hideEditUserModal={this.hideEditUserModal} />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        user:state.users
    }
}

export default connect(mapStateToProps)(Header);