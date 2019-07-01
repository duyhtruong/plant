import React from 'react';
import GetPlants from './plantFolder/GetPlants'
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import AddPlant from './plantFolder/AddPlant';

class Dashboard extends React.Component{

    state = {
        toggleModal: false
    }

    //Toggle state to show and hide Modal
    showModal = () =>{
        this.setState({
            toggleModal: true
        })
    }

    hideModal = () =>{
        this.setState({
            toggleModal: false
        })
    }

    //Render User Specific Greeting
    renderWelcome = () =>{
        return(
            <div className='helloDash'>
                <p>Hello</p>
                <p className='helloDashName'>{this.props.user.undefined.user.name}</p>
            </div>
        )
    }
    
    //Render Add Plant Button
    renderButton = () => {
        return(  
            <button onClick={this.showModal} className='plantFormLink addPlantButton'>
                <p className='addPlantText'>+</p>
            </button> 
        ) 
    }

    render(){
        return(
            <div className='dashboardBackground'>
                <div>
                    <div className='dashboardGroup'>
                        {this.renderWelcome()}
                        {this.renderButton()}
                        <Modal show={this.state.toggleModal} >
                            <AddPlant hideModal={this.hideModal} />
                        </Modal>
                    </div>
                    <GetPlants />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.users
    }
}

export default connect(mapStateToProps)(Dashboard);