import React from 'react';
import { getPlants, deletePlant } from '../../actions/';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

class GetPlants extends React.Component{
    
    componentDidMount(){
        this.props.getPlants(this.props.user.undefined.token)
    }

    deletePlantHelper=(id)=>{
        this.props.deletePlant(id)
    }


    renderPlants = () =>{
        return (
            this.props.plants.map((plant)=>
                <div key={plant._id}>
                    <Card 
                        className='getPlantsCards' 
                        bg='light' 
                        border='success' 
                    >
                        <Card.Header>
                            {plant.name}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This is where the description of the plant wil be
                            </Card.Text>
                        </Card.Body>
                        <ListGroup >
                            <ListGroupItem>{plant.water}</ListGroupItem>
                        </ListGroup>
                        <Button 
                            onClick={this.props.deletePlant.bind(this, plant._id, this.props.user.undefined.token)}  
                            variant='danger'
                            >Delete
                        </Button>
                        <Button 
                            variant='success'
                            >
                            <Link 
                                to={`/plant/${plant._id}`}
                                className='plantFormLink'
                                >Edit</Link>
                        </Button>
                    </Card>
                </div>
            )
        )
    }

    renderButton = () => {
        return(
            
            <Button 
                className='getPlantButton' 
                variant="dark" 
                size="lg"
            >
                <Link to='/add' className='plantFormLink'>+</Link> 
            </Button>
        ) 
    }
    
    render(){
        return(
            <div className='getPlantsGroup'>
                {this.renderButton()}              
                {this.renderPlants()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        plants: Object.values(state.plants),
        user: (state.users)
    }
}

export default connect(mapStateToProps,{ getPlants, deletePlant })(GetPlants);