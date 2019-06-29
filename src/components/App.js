import React from 'react';
import '../index.css';


import Header from './Header';
import Dashboard from './Dashboard';
import Login from './Login';
import AddPlant from './plantFolder/AddPlant';
import EditPlant from './plantFolder/EditPlant';
import Register from './Register';
import Logout from './Logout';
import Landing from './Landing';

import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';



class App extends React.Component{
    render(){
        return(
            <Router history={history}>
  
                    
                    <Switch>
                    <Route path ='/plant/login' exact component={Login}/>
                    <Route path ='/plant/' exact component={Landing}/>
                    <Route path ='/plant/register/' exact component ={Register}/>
                    <Route component={Header} />
                       
                    </Switch>
                    
                        <Route path ='/plant/dashboard' exact component={Dashboard}/>
                        <Route path ='/plant/add' exact component={AddPlant}/>
                        <Route path ='/plant/plant/:id' exact component={EditPlant}/>
                        
                        <Route path='/plant/logout' exact component ={Logout} />
                
     
            </Router>
        )
    }
}

export default App;