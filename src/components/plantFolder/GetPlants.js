import React from 'react';
import { getPlants } from '../../actions/';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

class GetPlants extends React.Component{
    
    componentDidMount(){
        this.props.getPlants()
    }

    renderPlants = () =>{
        return (
            this.props.plants.map((plant)=>{
                return(
                    <div key={plant._id}>
                        <Card className='getPlantsCards' bg='light' border='success' >
                            <Card.Header>
                                {plant.name}
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>This is where the description of the plant wil be</Card.Text>
                            </Card.Body>
                            <ListGroup >
                                <ListGroupItem>{plant.water}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </div>
                )
            })
        )
    }

    renderButton = () => {
        return(
            <Button className='getPlantButton' variant="dark" size="lg">
                <p>+</p>
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
        plants: Object.values(state.plants)
    }
}

export default connect(mapStateToProps,{ getPlants })(GetPlants);