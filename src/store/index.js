import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';


const initialState = {
    city: null
    //por este null,sale el error por consola, pero si pongo una ciudad se queda como cargando pronostico extendido para la ciudad que ponga sin sacar los datos...
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));