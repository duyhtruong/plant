import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand><Link to='/dashboard'>Dashboard</Link></Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to='/'>Login</Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to='/logout'>Logout</Link>
                        </Navbar.Text>                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;