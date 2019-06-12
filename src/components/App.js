import React from 'react';
import Dashboard from './Dashboard';

import Container from 'react-bootstrap/Container';

class App extends React.Component{
    render(){
        return(
            <div>
                <Container>
                <Dashboard />
                </Container>
            </div>
        )
    }
}

export default App;