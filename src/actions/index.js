import transformForecast from './../services/transformForecast';


export const SET_CITY = 'SET_CITY';


export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = value => ({type: SET_CITY, value});
const setForecastData = value => ({type: SET_FORECAST_DATA, value})



const api_key = "8d39debb03f020b55cec53aa3eae31bc";
const url = "http://api.openweathermap.org/data/2.5/forecast";


export const setSelectedCity = value => {
    return dispatch => {
        const url_forecast = `${url}?q=${value}&appid=${api_key}`;

        dispatch(setCity(value));
        
    
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                
                dispatch(setForecastData({city: value, forecastData}));
            }
        ); 

       
    };
};