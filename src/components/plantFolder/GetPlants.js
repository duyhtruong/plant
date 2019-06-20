import React from 'react';
import { getPlants, deletePlant } from '../../actions/';
import { connect } from 'react-redux';

import EditPlant from './EditPlant';

import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';

class GetPlants extends React.Component{

    state ={
        editModal: null
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
        var months = ["January", 
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
        
        var nextDay = new Date(plant.lastwater);
        nextDay.setDate(nextDay.getDate() + parseInt(plant.water));

        var day = nextDay.getDate();

        var month = nextDay.getMonth();

        return months[month]  + ' ' + day.toString();
        
    }   


    renderPlants = () =>{
        return (
            this.props.plants.map((plant)=>
                <div key={plant._id}>
                    <Card 
                        className='getPlantsCards'  
                    >
                        <Card.Header className='plantCardHeader'>
                            <p className='plantCardHeaderTop'>Water on </p>
                            <p className='plantCardHeaderDays'>{this.getNextDate(plant)}</p>
                            <p className='plantCardHeaderBottom'>this date!</p>
                        </Card.Header>
                        <Card.Body className='plantCardBody'>
                            <Card.Title className='plantCardTitle'>
                                {plant.name}
                                {this.getNextDate(plant)}

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

export default connect(mapStateToProps,{ getPlants, deletePlant })(GetPlants);