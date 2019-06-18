import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


class Landing extends React.Component{
    render(){
        return(
            
        
            <div className='loginLandingPage'>
            
                <Card className='loginCard'>
                    <Card.Title className='cardTitle'>Welcome To Plant Feedr</Card.Title>
                    <div className='landingFormButtonContainer'>
                  
                            <Link className='plantFormLink loginFormButtons' to='/login'>Login</Link>
                            <Link className='plantFormLink loginFormButtons' to='/register'>Sign Up</Link>
                    
                    </div>
                </Card>
            </div>
        )
    }
}

export default Landing;