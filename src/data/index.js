import { createStore } from "vuex"; 

//import andere files om te laten zien op de pagina. 
import WeatherAPI from './methods/WeatherAPI.js';

export default createStore ({

    modules: {
        WeatherAPI, //
    },


});