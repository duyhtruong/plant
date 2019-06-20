import React from 'react';

import PlantForm from './PlantForm';

import { connect } from 'react-redux';
import { editPlant, getPlant } from '../../actions';

import _ from 'lodash';


class EditPlant extends React.Component{
    componentDidMount(){
        this.props.getPlant(this.props.plantID,this.props.user.undefined.token)
    }
    onSubmit=(formValues)=>{
        this.props.editPlant(this.props.plantID,formValues,this.props.user.undefined.token)
        this.props.hideEditModal()
    }
    
    render(){
        return(
            <div>
                <PlantForm 
                    initialValues={_.pick(this.props.plant, 'name','sun', 'water', 'lastwater')}
                    onSubmit={this.onSubmit}
                    hideModal={this.props.hideEditModal}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return{
        plant: state.plants[ownProps.plantID],
        user: state.users
    }
}

export default connect(mapStateToProps,{ editPlant, getPlant})(EditPlant);