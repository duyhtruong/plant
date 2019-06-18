import React from 'react';
import { getPlants, deletePlant } from '../../actions/';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


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
                    >
                        <Card.Header className='plantCardHeader'>
                            <p className='plantCardHeaderTop'>Water Every</p>
                            <p className='plantCardHeaderDays'>{plant.water}</p>
                            <p className='plantCardHeaderBottom'>Days</p>
                        </Card.Header>
                        <Card.Body className='plantCardBody'>
                            <Card.Title className='plantCardTitle'>
                                {plant.name}
                            </Card.Title>
                            <Card.Text>
                                {plant.sun}
                            </Card.Text>
                        </Card.Body>
                        <div className='plantCardButtonContainer'>
                            <button className='plantCardButton' 
                                onClick={this.props.deletePlant.bind(this, plant._id, this.props.user.undefined.token)}   
                                >Delete
                            </button>

                            <Link 
                                to={`/plant/${plant._id}`}
                                className='plantFormLink plantCardButton'
                                >Edit</Link>
                        </div>   
                    </Card>
                </div>
            )
        )
    }


    
    render(){
        return(
            <div className='getPlantsGroup'>             
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