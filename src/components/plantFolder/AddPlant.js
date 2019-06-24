import React from 'react';

import PlantForm from './PlantForm';
import { connect } from 'react-redux';
import { createPlant } from '../../actions';

class AddPlant extends React.Component{
    
    onSubmit=(formValues,props)=>{
            this.props.createPlant(formValues,this.props.user.undefined.token,this.props.hideModal)
 
    }
    
    render(){
        return(
            <div>
                <PlantForm 
                onSubmit={this.onSubmit}
                hideModal={this.props.hideModal}
                 />
            </div>
        )
    }
}

    const mapStateToProps = (state)=>{
        return{
            newPlant : (state.form),
            user: (state.users)
        }
    }

export default connect(mapStateToProps,{createPlant})(AddPlant);