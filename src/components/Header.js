import React from 'react'

import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Plant App Placeholder Icon</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Placeholder
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;