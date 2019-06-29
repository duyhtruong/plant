import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CardGroup from  'react-bootstrap/CardGroup';

class Landing extends React.Component{
    render(){
        return(
            
        
            <div className='loginLandingPage'>
            <CardGroup>
                <Card className='landingCards landingCardLeft'></Card>
                <Card className='landingCards landingCardRight'>
                    <Card.Title className='landingTitle'>Plant Feedr</Card.Title>
                    <p>Created to keep your plants alive</p>
                    <div className='landingFormButtonContainer'>
                  
                            <Link className='plantFormLink landingButtons' to='/plant/login'>Login</Link>
                            <Link className='plantFormLink landingButtons' to='/plant/register'>Sign Up</Link>
                    
                    </div>
                </Card>
                </CardGroup>
            </div>
        )
    }
}

export default Landing;