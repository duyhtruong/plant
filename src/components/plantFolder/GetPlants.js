import React from 'react';
import EditPlant from './EditPlant';

import { editPlant } from '../../actions';
import { getPlants, deletePlant } from '../../actions/';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

import { FiSun, FiClock, FiCloudDrizzle } from 'react-icons/fi';


class GetPlants extends React.Component{
   
    //Setting state for showing edit Modal and Months
    state = {
        editModal: null,
        months: ["January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"]
    }

    //When component mounts get list of all plants
    componentDidMount(){
        this.props.getPlants(this.props.user.undefined.token)
    }


/*
    Helper Functions
*/


    //Toggle for showing Edit Modal
    showEditModal = (id) => {
        this.setState({
            editModal: id
        })
    }

    hideEditModal = () => {
        this.setState({
            editModal: null
        })
    }

    //calls deletePlant action Creator
    deletePlantHelper=(id)=>{
        this.props.deletePlant(id)
    }

  
    //Helper function to calculate 
    //Next Date plant needs to be watered
    getNextDate = (plant) => { 
        var nextDay = new Date(plant.lastwater);
        nextDay.setDate(nextDay.getDate() + parseInt(plant.water));
        var day = nextDay.getDate();
        var month = nextDay.getMonth();
        return this.state.months[month]  + ' ' + day.toString();
    }   

    formatLastWater = (plant) => {
        var lastDay = new Date(plant.lastwater);
        var day = lastDay.getDate();
        var month = lastDay.getMonth();
        return this.state.months[month] + ' ' + day.toString();
    }

    //Helper function for Water button
    //Changes last watered date to Today
    changeLastWatered = (plant) => {
        var today = new Date()
        var todayObject = {
            'lastwater': today
            }
        this.props.editPlant(plant._id,todayObject,this.props.user.undefined.token)
    }

    //Map through plants and render 
    renderPlants = () =>{
        return (
            this.props.plants.map((plant)=>
                <Col md={6} lg={4} className='getPlantIndividual' key={plant._id}>
                    <Card className='getPlantsCards'>
                        <Card.Header className='plantCardHeader'>
                            <p className='plantCardHeaderTop'>{plant.name}</p>
                            <p className='plantCardHeaderDays'>Next watering date:</p>
                            <p className='plantCardHeaderBottom'>{this.getNextDate(plant)}</p>
                            <button 
                                className='cardWaterButton'
                                onClick={()=>this.changeLastWatered(plant)}>
                                WATER
                            </button>
                        </Card.Header>
                        <Card.Body className='plantCardBody'>
                           <div className='cardIcons'>
                                <div><FiSun /></div>
                                <div><FiCloudDrizzle /></div>
                                <div><FiClock /></div>
                            </div>
                            <div className='cardDetails'>
                                <p>{plant.sun}</p>
                                <p>Water every {plant.water} days</p>
                                <p>Last watered: {this.formatLastWater(plant)} </p>
                            </div>
                        </Card.Body>
                        <div className='plantCardButtonContainer'>
                            <button className='plantCardButton' 
                                onClick={this.props.deletePlant.bind(this, plant._id, this.props.user.undefined.token)}   
                                >Delete
                            </button>
                            <button className='plantCardButton'
                                onClick={()=>this.showEditModal(plant._id)}
                                >Edit
                            </button>
                            <Modal show={this.state.editModal === plant._id} >  
                                <EditPlant plantID={plant._id} hideEditModal={this.hideEditModal}  />
                            </Modal>
                        </div>   
                    </Card>
                </Col>
            )
        )
    }
    
    render(){
        return(
            <Container>
                <Row className='getPlantsGroup' noGutters={true}>             
                    {this.renderPlants()}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        plants: Object.values(state.plants),
        user: (state.users)
    }
}

export default connect(mapStateToProps,{ getPlants, deletePlant, editPlant })(GetPlants);