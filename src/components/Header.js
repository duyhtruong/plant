import React from 'react'
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Logout from './Logout';
class Header extends React.Component{
    
    state ={
        logOutModal : false
    }
    
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

    renderButton = () =>{
        return(
            <div>
                <button className='navBarLogout' onClick={this.showLogOutModal}>Logout</button>
            </div>        
        )
    }

    render(){
        return(
            <div>
                <Navbar className='navBar'>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {this.renderButton()}          
                    </Navbar.Collapse>
                </Navbar>

                <Modal show={this.state.logOutModal}>
                    <Logout hideLogOutModal={this.hideLogOutModal} />
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