import React from 'react';
import GetPlants from './plantFolder/GetPlants'



class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <GetPlants />
                </div>
            </div>
        )
    }
}

export default Dashboard;