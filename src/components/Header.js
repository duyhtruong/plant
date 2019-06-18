import React from 'react'
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div className='navParent'>
            <div className='navAccent'></div>
                <Navbar className='navBar'>
                    <Navbar.Brand><Link className='navBarLink navBarBrand' to='/dashboard'>Home</Link></Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <div className='navBarLogout'>
                            <Link className='navBarLink' to='/logout'>Logout</Link>
                            </div>              
                    </Navbar.Collapse>
                </Navbar>
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