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