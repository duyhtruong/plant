import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Landing extends React.Component{
    render(){
        return(
            <div>
                <Card>
                    <Card.Title>Welcome To Plant Feedr</Card.Title>
                    <div>
                        <Button variant='primary'><Link to='/login'>Login</Link></Button>
                        <Button variant='primary'><Link to='/register'>Register</Link></Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Landing;