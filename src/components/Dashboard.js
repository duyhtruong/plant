import React from 'react';
import GetPlants from './plantFolder/GetPlants'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component{
    
    renderWelcome = () =>{
        return(
            <div className='helloDash'>
                <p>Hello</p>
                <p className='helloDashName'>{this.props.user.undefined.user.name}</p>
            </div>
        )
    }
    
    renderButton = () => {
        return(  
                <Link to='/add' className='plantFormLink addPlantButton'><p className='addPlantText'>+</p></Link> 
        ) 
    }

    render(){
        return(
            <div className='dashboardBackground'>
                <div>
                    <div className='dashboardGroup'>
                        {this.renderWelcome()}
                        {this.renderButton()}
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