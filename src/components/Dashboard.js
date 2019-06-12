import React from 'react';
import Header from './Header';

import Button from 'react-bootstrap/Button'


class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Button variant="primary" size="lg" block>
                    Add a Plant
                </Button>
            </div>
        )
    }
}

export default Dashboard;