import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miércoles',
//     'Jueves',
//     'Viernes',
// ] 

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind:' normal',
// }

const api_key = "8d39debb03f020b55cec53aa3eae31bc";
const url = "https://api.openweathermap.org/data/2.5/forecast";



class ForecastExtended extends Component { 

    constructor () {
        super();
        this.state = { forecastData: null}
    }

    componentDidMount(){
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log('hola');
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                // console.log(forecastData);
                this.setState({ forecastData });
            }
        ); 

    }

    renderForecastItemDays() { 
        return <h1>Render Items</h1>
        // return forecastData.map( forecast => (
        // <ForecastItem 
        //     key={`${forecast.weekDay}${forecast.hour}`}
        //     weekDay={forecast.day} 
        //     hour={forecast.hour} 
        //     data={forecast.data}>
        // </ForecastItem>));
    }


    renderProgress = () =>{
        return <h3>Cargando Pronóstico Extendido...</h3>;
    }
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
         return(
            <div>
                <h3 className='forecast-title'>Pronóstico Extendido para {city}</h3>
                {forecastData ?
                this.renderForecastItemDays() : 
                this.renderProgress()}
            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    
}

export default ForecastExtended;