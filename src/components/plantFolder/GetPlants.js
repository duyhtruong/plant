import React from 'react';
import { getPlants, deletePlant } from '../../actions/';
import { connect } from 'react-redux';

import EditPlant from './EditPlant';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { editPlant } from '../../actions';

import { FiSun, FiClock, FiCloudDrizzle } from 'react-icons/fi';

class GetPlants extends React.Component{

    state ={
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

    componentDidMount(){
        this.props.getPlants(this.props.user.undefined.token)
    }

    deletePlantHelper=(id)=>{
        this.props.deletePlant(id)
    }

  

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

    changeLastWatered = (plant) => {
        var today = new Date()
        var todayObject = {
            'lastwater': today
        }
        this.props.editPlant(plant._id,todayObject,this.props.user.undefined.token)
    }


    renderPlants = () =>{
        return (
            this.props.plants.map((plant)=>
                <div key={plant._id}>
                    <Card 
                        className='getPlantsCards'  
                    >
                        <Card.Header className='plantCardHeader'>
                            <p className='plantCardHeaderTop'>{plant.name}</p>
                            <p className='plantCardHeaderDays'>Next watering date:</p>
                            <p className='plantCardHeaderBottom'>{this.getNextDate(plant)}</p>
                            <button 
                                className='cardWaterButton'
                                onClick={()=>this.changeLastWatered(plant)}>WATER</button>
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

export default connect(mapStateToProps,{ getPlants, deletePlant, editPlant })(GetPlants);