import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';



const cities = [
  'Madrid',
  'Caracas',
  'Miranda de Ebro',
  'Higuerote',
  'Vitoria-Gasteiz',
  'Bilbao',
];




class App extends Component {

  render(){
    return(
      
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <ToolBar>
                <Typography  color='inherit'>
                  Weather App
                </Typography>
              </ToolBar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
                <LocationListContainer cities={cities}> </LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
               <ForecastExtendedContainer></ForecastExtendedContainer> 
                </div>
            </Paper>
            
          </Col>
          </Row>
        </Grid>
    );
  }
}




export default App;
