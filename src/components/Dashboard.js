import React from 'react';
import Header from './Header';
import GetPlants from './plantFolder/GetPlants'



class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div>
                    <GetPlants />
                </div>
            </div>
        )
    }
}

export default Dashboard;