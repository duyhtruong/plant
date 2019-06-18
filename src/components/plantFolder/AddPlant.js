import React from 'react';

import PlantForm from './PlantForm';
import { connect } from 'react-redux';
import { createPlant } from '../../actions';

class AddPlant extends React.Component{
    
    onSubmit=(formValues,props)=>{
        return(
            this.props.createPlant(formValues,this.props.user.undefined.token)
        )
    }
    
    render(){
        return(
            <div className='loginLandingPage'>
                <PlantForm onSubmit={this.onSubmit} />
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