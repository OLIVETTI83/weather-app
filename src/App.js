import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/ForecastExtended';

import './App.css';
import LocationList from './components/LocationList';
// import { MuiThemeProvider } from '@material-ui/core';

const cities = [
  'Madrid',
  'Caracas',
  'Miranda de Ebro',
  'Higuerote',
  'Vitoria-Gasteiz',
  'Bilbao',
]



class App extends Component {

  constructor() {
    super();

    this.state = { city: null};
  }

  handleSelectedLocation = city =>{
    this.setState({ city });
    console.log(`handleSelectionLocation ${city}`);
  }
  render(){
    const {city} = this.state;
    return(
      
      // <MuiThemeProvider>
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
                <LocationList cities={cities}
                  onSelectedLocation={this.handleSelectedLocation}>
                </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
                {
                  city && 
                    <ForecastExtended city={city}></ForecastExtended> 
                }
                    
                </div>
            </Paper>
            
          </Col>
          </Row>
        </Grid>
      // </MuiThemeProvider>
    );
  }
}

export default App;