import React from 'react';

import PlantForm from './PlantForm';
import { connect } from 'react-redux';
import { createPlant } from '../../actions';

class AddPlant extends React.Component{
    
    onSubmit=(formValues)=>{
        return(
            this.props.createPlant(formValues)
        )
    }
    
    render(){
        return(
            <div>
                <PlantForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

    const mapStateToProps = (state)=>{
        return{
            newPlant : (state.form) 
        }
    }

export default connect(mapStateToProps,{createPlant})(AddPlant);